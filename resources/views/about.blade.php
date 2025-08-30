@extends('layouts.app')

@section('title', 'आमच्याबद्दल - नवी उमंग')

@section('content')
<!-- Hero Section -->
<section class="py-16 px-4 bg-white">
    <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            नवी उमंग बद्दल
        </h1>
        <p class="text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            २०१५ मध्ये स्थापन झालेली नवी उमंग ही एक अशी संस्था आहे जी महाराष्ट्रातील गरीब आणि वंचित समुदायाला आर्थिक मदत न करता त्यांच्या जीवनातील कठीण परिस्थितीत सहाय्य करण्यास वचनबद्ध आहे.
        </p>

        <!-- Hero Image -->
        <div class="max-w-4xl mx-auto mb-12">
            <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                 alt="नवी उमंग स्वयंसेवक"
                 class="w-full h-80 object-cover rounded-xl shadow-lg">
        </div>
    </div>
</section>

<!-- Our Story Section -->
<section class="py-16 px-4 bg-gray-50">
    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                आमची कथा
            </h2>
        </div>

        <div class="max-w-4xl mx-auto">
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                नवी उमंग एका साध्या विचारातून जन्माला आली: प्रत्येक व्यक्तीला योग्य मार्गदर्शन, शिक्षण आणि मानसिक सहाय मिळण्याचा हक्क आहे. आम्ही जन्मतः स्वयंसेवकांच्या छोट्या गटापासून सुरुवात करून आज एक मजबूत संस्था बनली आहे जी समुदायाच्या सेवेत समर्पित आहे.
            </p>

            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                आमचे काम मार्गदर्शन, भावनिक आधार, कौशल्य विकास आणि संसाधन सहायतामाच्या क्षेत्रात आहे. आम्ही पैशाची मदत न करता लोकांना स्वावलंबी बनवण्यासाठी योग दिशा दाखवतो आणि त्यांच्या समस्यांचे उपाय शोधण्यात मदत करतो.
            </p>
        </div>
    </div>
</section>

<!-- Services Section -->
<section class="py-16 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-8">
            <!-- Educational Guidance -->
            <div class="bg-blue-50 rounded-xl p-8">
                <div class="flex items-start mb-4">
                    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <i data-lucide="graduation-cap" class="text-white" style="width: 24px; height: 24px;"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">शैक्षणिक मार्गदर्शन</h3>
                </div>
                <p class="text-gray-700 leading-relaxed">
                    मुलांसाठी मोफत शिक्षण मार्गदर्शन, वर्गेची तयारी, करिअर काउंसेलिंग आणि शिक्षणाची योग्य दिशा दाखवून त्यांच्या स्वप्नांना वास्तव बनवण्यात मदत करतो.
                </p>
            </div>

            <!-- Emotional Support -->
            <div class="bg-green-50 rounded-xl p-8">
                <div class="flex items-start mb-4">
                    <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <i data-lucide="heart" class="text-white" style="width: 24px; height: 24px;"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">भावनिक आधार व सल्ला</h3>
                </div>
                <p class="text-gray-700 leading-relaxed">
                    जीवनातील कठीण परिस्थितीत भावनिक आधार, कुटुंबीय समस्यांचे निराकरण, मानसिक नामामुरी आणि आत्मविश्वास वाढवणे, योग्य सल्लागारांकडे पाठवणे.
                </p>
            </div>

            <!-- Resource Mobilization -->
            <div class="bg-orange-50 rounded-xl p-8">
                <div class="flex items-start mb-4">
                    <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <i data-lucide="home" class="text-white" style="width: 24px; height: 24px;"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">संसाधन जुळवणूक</h3>
                </div>
                <p class="text-gray-700 leading-relaxed">
                    शिक्षण साहित्य, कपडे, अन्नधान्य गोळा करून वितरण, सरकारी योजनांची माहिती देणे आणि अर्ज भरण्यात मदत करणे.
                </p>
            </div>

            <!-- Skill Development -->
            <div class="bg-purple-50 rounded-xl p-8">
                <div class="flex items-start mb-4">
                    <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <i data-lucide="briefcase" class="text-white" style="width: 24px; height: 24px;"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">कौशल्य विकास</h3>
                </div>
                <p class="text-gray-700 leading-relaxed">
                    मोफत कॉम्प्युटर ट्रेनिंग, इंग्रजी भाषा, हातकला, कुकिंग, ड्रायव्हिंग आणि इतर व्यावसायिक कौशल्यांचे प्रशिक्षण उपलब्ध करणे रोजगार मिळवण्यात मदत होते.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Call to Action Section -->
<section class="py-16 px-4 bg-gradient-to-r from-blue-500 to-blue-600">
    <div class="max-w-4xl mx-auto text-center">
        <div class="bg-blue-600 rounded-xl p-12 text-white">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
                आमच्या मिशनमध्ये सामील व्हा
            </h2>
            <p class="text-xl mb-8 opacity-90">
                स्वयंसेवा, जागरुकता किंवा इतर मार्गांनी सामील होऊन तुम्ही राजगानात फरक पाडू शकता.
            </p>
            <a href="/register" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                आजच सुरुवात करा
            </a>
        </div>
    </div>
</section>

<script>
    // Initialize Lucide icons
    lucide.createIcons();
</script>
@endsection
