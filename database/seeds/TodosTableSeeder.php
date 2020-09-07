<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;

class TodosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('todos')->truncate();
        DB::table('todos')->insert([
            [
                'date' => Carbon::today()->format('Y-m-d'),
                'title' => '🐶 犬の散歩',
                'time' => '10:00',
                'content' => '河川敷でお散歩',
                'is_checked' => true,
            ],
        ]);

        DB::table('todos')->insert([
            [
                'date' => Carbon::today()->format('Y-m-d'),
                'title' => '📖 勉強',
                'time' => '13:00',
                'content' => 'Reactの勉強をする',
                'is_checked' => false,
            ],
        ]);

        DB::table('todos')->insert([
            [
                'date' => Carbon::today()->format('Y-m-d'),
                'title' => '🍜 みんなでラーメン',
                'time' => '19:00',
                'content' => 'とんこつラーメン食べる🤤',
                'is_checked' => false,
            ],
        ]);
    }
}
