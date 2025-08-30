<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('registrations', function (Blueprint $table) {
            // Check if columns exist before adding them
            if (!Schema::hasColumn('registrations', 'name')) {
                $table->string('name')->nullable()->after('id');
            }
            if (!Schema::hasColumn('registrations', 'phone')) {
                $table->string('phone', 15)->nullable()->after('name');
            }
            if (!Schema::hasColumn('registrations', 'age')) {
                $table->integer('age')->nullable()->after('email');
            }
            if (!Schema::hasColumn('registrations', 'address')) {
                $table->text('address')->nullable()->after('age');
            }
            if (!Schema::hasColumn('registrations', 'education')) {
                $table->string('education')->nullable()->after('address');
            }
            if (!Schema::hasColumn('registrations', 'occupation')) {
                $table->string('occupation')->nullable()->after('education');
            }
            if (!Schema::hasColumn('registrations', 'skills')) {
                $table->text('skills')->nullable()->after('occupation');
            }
            if (!Schema::hasColumn('registrations', 'motivation')) {
                $table->text('motivation')->nullable()->after('skills');
            }
        });

        // Copy data from old columns to new columns if they exist
        if (Schema::hasColumn('registrations', 'full_name') && Schema::hasColumn('registrations', 'name')) {
            DB::statement('UPDATE registrations SET name = full_name WHERE name IS NULL');
        }
        if (Schema::hasColumn('registrations', 'mobile') && Schema::hasColumn('registrations', 'phone')) {
            DB::statement('UPDATE registrations SET phone = mobile WHERE phone IS NULL');
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('registrations', function (Blueprint $table) {
            $table->dropColumn(['name', 'phone', 'age', 'address', 'education', 'occupation', 'skills', 'motivation']);
        });
    }
};
