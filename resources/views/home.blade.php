@extends('layouts.app')

@section('title', 'मुख्यपृष्ठ - नवी उमंग')

@section('content')
<!-- Hero Section -->
<section class="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="relative max-w-6xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
            नवीन आशा, नवीन संधी
        </h1>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            शिक्षण, आरोग्य आणि शाश्वत विकासाद्वारे समुदायाला सशक्त बनवणे
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" class="bg-ngo-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                आमच्यात सामील व्हा
            </a>
            <a href="/about" class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                आमच्याबद्दल जाणून घ्या
            </a>
        </div>
    </div>
</section>

<!-- Services Section -->
<section class="py-16 px-4 bg-gray-50">
    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">आमच्या सेवा</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                आमची सेवा देत नाही, पण आमच्या जीवनात सकारात्मक बदल घडवण्यासाठी गरजा आणि विविध समुदायाची सेवा करणे, कौशल्य आणि संसाधने देणे.
            </p>
        </div>
        <div class="grid md:grid-cols-4 gap-6">
            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
                <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="graduation-cap" class="text-white" style="width: 32px; height: 32px;"></i>
                </div>
                <h3 class="text-lg font-semibold mb-3 text-gray-900">शैक्षणिक मार्गदर्शन</h3>
                <p class="text-gray-600 text-sm">
                    मुलांना शिक्षण, करिअर मार्गदर्शन आणि विकासाच्या संधी उपलब्ध करणे
                </p>
            </div>
            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
                <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="heart" class="text-white" style="width: 32px; height: 32px;"></i>
                </div>
                <h3 class="text-lg font-semibold mb-3 text-gray-900">भावनिक आधार</h3>
                <p class="text-gray-600 text-sm">
                    कठीण परिस्थितीत कुटुंबांना भावनिक आधार आणि मानसिक स्वास्थ्य सेवा
                </p>
            </div>
            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
                <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="users" class="text-white" style="width: 32px; height: 32px;"></i>
                </div>
                <h3 class="text-lg font-semibold mb-3 text-gray-900">संसाधन एकत्रीकरण</h3>
                <p class="text-gray-600 text-sm">
                    शिक्षण साहित्य, कपडे आणि आवश्यक वस्तू गोळा करून वितरण
                </p>
            </div>
            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
                <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="target" class="text-white" style="width: 32px; height: 32px;"></i>
                </div>
                <h3 class="text-lg font-semibold mb-3 text-gray-900">कौशल्य प्रशिक्षण</h3>
                <p class="text-gray-600 text-sm">
                    रोजगारासाठी आवश्यक कौशल्यांचे मोफत प्रशिक्षण आणि मार्गदर्शन
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Volunteers Section -->
<section class="py-16 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">आमच्या स्वयंसेवकांना भेटा</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                समाजसेवेसाठी समर्पित असलेली आणि समुदायात बदल घडवण्याची कर्तृत्व व्यासी.
            </p>
        </div>

        <!-- Volunteer Grid -->
        <div class="grid md:grid-cols-4 gap-6 mb-8">
            @foreach($volunteers as $volunteer)
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src="{{ $volunteer['image_url'] }}" alt="{{ $volunteer['name'] }}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-semibold mb-1 text-gray-900">{{ $volunteer['name'] }}</h3>
                    <p class="text-orange-500 font-medium text-sm mb-2">{{ $volunteer['role'] }}</p>
                    <p class="text-gray-600 text-sm leading-relaxed">{{ $volunteer['description'] }}</p>
                </div>
            </div>
            @endforeach
        </div>

        <!-- Join Button -->
        <div class="text-center">
            <a href="/register" class="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                आमच्या संघात सामील व्हा
            </a>
        </div>
    </div>
</section>

<!-- Impact Section -->
<section class="py-16 px-4 bg-gray-50">
    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">आमचा प्रभाव</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                एकत्र मिळून आम्ही महाराष्ट्रातील समुदायांमध्ये अर्थपूर्ण बदल घडवत आहोत.
            </p>
        </div>
        <div class="grid md:grid-cols-4 gap-8">
            <div class="text-center">
                <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="users" class="text-white" style="width: 32px; height: 32px;"></i>
                </div>
                <div class="text-3xl font-bold mb-2 text-blue-600">१५,०००+</div>
                <div class="text-gray-700">लोकांना मदत केली</div>
            </div>
            <div class="text-center">
                <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="graduation-cap" class="text-white" style="width: 32px; height: 32px;"></i>
                </div>
                <div class="text-3xl font-bold mb-2 text-green-600">८००+</div>
                <div class="text-gray-700">मार्गदर्शन दिले</div>
            </div>
            <div class="text-center">
                <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="home" class="text-white" style="width: 32px; height: 32px;"></i>
                </div>
                <div class="text-3xl font-bold mb-2 text-orange-600">३००+</div>
                <div class="text-gray-700">कुटुंबांना आधार</div>
            </div>
            <div class="text-center">
                <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="heart" class="text-white" style="width: 32px; height: 32px;"></i>
                </div>
                <div class="text-3xl font-bold mb-2 text-purple-600">१२०+</div>
                <div class="text-gray-700">सहायता कार्यक्रम</div>
            </div>
        </div>
    </div>
</section>

<script>
    // Initialize Lucide icons
    lucide.createIcons();
</script>
@endsection
