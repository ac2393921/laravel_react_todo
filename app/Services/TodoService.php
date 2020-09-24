<?php
declare(strict_types=1);

namespace App\Services;

use App\Todo;
use Illuminate\Database\Eloquent\Collection;

class TodoService
{
    /**
     * @var Todo
     */
    private $todo;

    public function __construct(Todo $todo)
    {
        $this->todo = $todo;
    }

    /**
     * Todoを全て取得する
     *
     * @param integer $userId
     * @return Collection
     */
    public function fetchAll(int $userId): Collection
    {
        return $this->todo
            ->where('user_id', $userId)
            ->orderBy('date')
            ->orderBy('time')
            ->get();
    }

    /**
     * Todoを作成する
     *
     * @param integer $userId
     * @param string $title
     * @param string $date
     * @param string $time
     * @param string $content
     * @return boolean
     */
    public function create(int $userId, string $title, string $date, string $time, string $content): bool
    {
        $this->todo->user_id = $userId;
        $this->todo->title = $title;
        $this->todo->date = $date;
        $this->todo->time =$time;
        $this->todo->content = $content;

        return $this->todo->save();
    }

    /**
     * 指定のTodoを更新する
     *
     * @param integer $id
     * @param string $title
     * @param string $date
     * @param string $time
     * @param string $content
     * @return Todo
     */
    public function update(int $id, string $title, string $date, string $time, string $content): Todo
    {
        $todo = $this->todo->find($id);
        $todo->title = $title;
        $todo->date = $date;
        $todo->time =$time;
        $todo->content = $content;
        $todo->save();

        return $todo;
    }

    /**
     * 指定のTodoのチェックの更新をする
     *
     * @param integer $id
     * @param boolean $check
     * @return Todo
     */
    public function check(int $id, bool $check): Todo
    {
        $todo = $this->todo->find($id);
        $todo->is_checked = $check;
        $todo->save();

        return $todo;
    }

    /**
     * 指定のTodoを削除する
     *
     * @param integer $id
     * @return boolean
     */
    public function delete(int $id): bool
    {
        $todo = $this->todo->find($id);
        return $todo->delete();
    }
}
