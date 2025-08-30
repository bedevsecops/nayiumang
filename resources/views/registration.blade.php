@extends('layouts.app')

@section('title', 'नोंदणी - नवी उमंग')

@section('content')
<div class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="max-w-2xl mx-auto">
        <!-- Header Section -->
        <div class="text-center mb-8">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                आमच्या समुदायात सामील व्हा
            </h1>
            <p class="text-lg text-gray-600 mb-8">
                आमच्या स्वयंसेवक संघात सामील होऊन महत्त्वाच्या गरजा आणि विविध समुदायाची सेवा करा.
            </p>
        </div>

        <!-- Benefits Section -->
        <div class="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">आमच्याबरोबर काम करून तुम्हाला:</h3>
            <ul class="space-y-2 text-gray-700">
                <li class="flex items-start">
                    <span class="text-blue-600 mr-2">•</span>
                    <span>नवीन लोकांशी संपर्क साधण्याचे संधी मिळतील</span>
                </li>
                <li class="flex items-start">
                    <span class="text-blue-600 mr-2">•</span>
                    <span>विविध आणि कौशल्य विकासाचे नवीन कार्य अनुभव</span>
                </li>
                <li class="flex items-start">
                    <span class="text-blue-600 mr-2">•</span>
                    <span>समाजिक आणि आर्थिक सहाय्य देण्याचे संधी</span>
                </li>
                <li class="flex items-start">
                    <span class="text-blue-600 mr-2">•</span>
                    <span>सामाजिक सेवा करून विविध देण्याचे संधी</span>
                </li>
                <li class="flex items-start">
                    <span class="text-blue-600 mr-2">•</span>
                    <span>सामुदायिक कार्यक्रमांमध्ये सहभाग घेण्याचे संधी</span>
                </li>
            </ul>
        </div>

        <!-- Registration Form -->
        <div class="bg-white rounded-lg shadow-lg p-8">
            @if(session('success'))
                <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    {{ session('success') }}
                </div>
            @endif

            <form action="/register" method="POST" class="space-y-6">
                @csrf

                <div>
                    <label for="full_name" class="block text-sm font-medium text-gray-700 mb-2">
                        पूर्ण नाव *
                    </label>
                    <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        value="{{ old('full_name') }}"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 @error('full_name') border-red-500 @enderror"
                        placeholder="तुमचे पूर्ण नाव लिहा"
                        required
                    >
                    @error('full_name')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                    @enderror
                </div>

                <div>
                    <label for="mobile" class="block text-sm font-medium text-gray-700 mb-2">
                        मोबाइल नंबर *
                    </label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value="{{ old('mobile') }}"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 @error('mobile') border-red-500 @enderror"
                        placeholder="१०-अंकी मोबाइल नंबर लिहा"
                        required
                    >
                    @error('mobile')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                    @enderror
                </div>

                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                        ईमेल पत्ता *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value="{{ old('email') }}"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 @error('email') border-red-500 @enderror"
                        placeholder="तुमचा ईमेल पत्ता लिहा"
                        required
                    >
                    @error('email')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                    @enderror
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-3">
                        आपल्याची लिंग (पर्यायी)
                    </label>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="flex items-center space-x-3">
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="पुरुष"
                                class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                {{ old('gender') == 'पुरुष' ? 'checked' : '' }}
                            >
                            <label for="male" class="text-sm text-gray-700">पुरुष</label>
                        </div>
                        <div class="flex items-center space-x-3">
                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="महिला"
                                class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                {{ old('gender') == 'महिला' ? 'checked' : '' }}
                            >
                            <label for="female" class="text-sm text-gray-700">महिला</label>
                        </div>
                        <div class="flex items-center space-x-3">
                            <input
                                type="radio"
                                id="other"
                                name="gender"
                                value="अन्य"
                                class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                {{ old('gender') == 'अन्य' ? 'checked' : '' }}
                            >
                            <label for="other" class="text-sm text-gray-700">अन्य</label>
                        </div>
                        <div class="flex items-center space-x-3">
                            <input
                                type="radio"
                                id="prefer_not_to_say"
                                name="gender"
                                value="सांगणार नाही"
                                class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                {{ old('gender') == 'सांगणार नाही' ? 'checked' : '' }}
                            >
                            <label for="prefer_not_to_say" class="text-sm text-gray-700">सांगणार नाही</label>
                        </div>
                    </div>
                    @error('gender')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                    @enderror
                </div>

                <button
                    type="submit"
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 text-lg rounded-lg font-semibold transition-colors duration-200"
                >
                    आता नोंदणी करा
                </button>
            </form>

            <!-- Footer Text -->
            <div class="mt-6 text-center">
                <p class="text-sm text-gray-500">
                    नोंदणी करून तुम्ही नवी उमंग संस्थेच्या गोपनीयता धोरणाशी आणि आचार संहितेशी सहमत आहात.
                </p>
            </div>
        </div>
    </div>
</div>
@endsection
