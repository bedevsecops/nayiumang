<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('registrations', function (Blueprint $table) {
            // Make old columns nullable to avoid required field errors
            if (Schema::hasColumn('registrations', 'full_name')) {
                $table->string('full_name')->nullable()->change();
            }
            if (Schema::hasColumn('registrations', 'mobile')) {
                $table->string('mobile', 15)->nullable()->change();
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('registrations', function (Blueprint $table) {
            // Revert changes if needed
            if (Schema::hasColumn('registrations', 'full_name')) {
                $table->string('full_name')->nullable(false)->change();
            }
            if (Schema::hasColumn('registrations', 'mobile')) {
                $table->string('mobile', 15)->nullable(false)->change();
            }
        });
    }
};
