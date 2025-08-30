<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'नवी उमंग')</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
    <script src="https://kit.fontawesome.com/your-kit-id.js" crossorigin="anonymous"></script>
    <style>
        :root {
            --ngo-blue: hsl(214 100% 59%);
            --ngo-green: hsl(142 71% 45%);
            --ngo-orange: hsl(21 90% 48%);
            --ngo-gray: hsl(210 40% 98%);
        }
        .text-ngo-blue { color: var(--ngo-blue); }
        .bg-ngo-blue { background-color: var(--ngo-blue); }
        .border-ngo-blue { border-color: var(--ngo-blue); }
        .hover\:bg-ngo-blue:hover { background-color: var(--ngo-blue); }
        body { font-family: 'Noto Sans Devanagari', 'Inter', system-ui, sans-serif; }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <!-- Logo -->
                <a href="/" class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <i data-lucide="heart" class="text-white" style="width: 20px; height: 20px;"></i>
                    </div>
                    <span class="text-xl font-bold text-gray-900">नवी उमंग</span>
                </a>

                <!-- Desktop Navigation -->
                <div class="hidden md:block">
                    <div class="flex items-center space-x-6">
                        <a href="/" class="{{ request()->is('/') ? 'bg-blue-500 text-white px-4 py-2 rounded-full' : 'text-gray-700 hover:text-blue-500' }} text-sm font-medium transition-colors">
                            मुख्यपृष्ठ
                        </a>
                        <a href="/about" class="{{ request()->is('about') ? 'bg-blue-500 text-white px-4 py-2 rounded-full' : 'text-gray-700 hover:text-blue-500' }} text-sm font-medium transition-colors">
                            आमच्याबद्दल
                        </a>
                        <a href="/register" class="{{ request()->is('register') ? 'bg-blue-500 text-white px-4 py-2 rounded-full' : 'text-gray-700 hover:text-blue-500' }} text-sm font-medium transition-colors">
                            नोंदणी
                        </a>
                    </div>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden">
                    <button id="mobile-menu-button" class="text-gray-600 hover:text-blue-500">
                        <i data-lucide="menu" style="width: 24px; height: 24px;"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile menu -->
        <div id="mobile-menu" class="md:hidden bg-white border-t hidden">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <a href="/" class="block w-full text-left px-3 py-2 text-base font-medium {{ request()->is('/') ? 'text-blue-500 bg-blue-50' : 'text-gray-600 hover:text-blue-500' }}">
                    मुख्यपृष्ठ
                </a>
                <a href="/about" class="block w-full text-left px-3 py-2 text-base font-medium {{ request()->is('about') ? 'text-blue-500 bg-blue-50' : 'text-gray-600 hover:text-blue-500' }}">
                    आमच्याबद्दल
                </a>
                <a href="/register" class="block w-full text-left px-3 py-2 text-base font-medium {{ request()->is('register') ? 'text-blue-500 bg-blue-50' : 'text-gray-600 hover:text-blue-500' }}">
                    नोंदणी
                </a>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main>
        @yield('content')
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 px-4">
        <div class="max-w-6xl mx-auto">
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Organization Info -->
                <div>
                    <div class="flex items-center space-x-3 mb-4">
                        <div class="w-10 h-10 bg-ngo-blue rounded-full flex items-center justify-center">
                            <i data-lucide="heart" class="text-white" style="width: 20px; height: 20px;"></i>
                        </div>
                        <span class="text-xl font-bold">नवी उमंग</span>
                    </div>
                    <p class="text-gray-400 mb-6 leading-relaxed">
                        शिक्षण, आरोग्य आणि सामाजिक विकासाद्वारे समुदायाच्या नवीन आशा आणि संधी देणे. एकत्र येऊन सकारात्मक बदल घडवणे.
                    </p>
                    <div class="flex space-x-4">
                        <button class="w-10 h-10 bg-gray-800 rounded-full p-0 hover:bg-ngo-blue flex items-center justify-center">
                            <i class="fab fa-facebook-f" style="font-size: 16px;"></i>
                        </button>
                        <button class="w-10 h-10 bg-gray-800 rounded-full p-0 hover:bg-ngo-blue flex items-center justify-center">
                            <i class="fab fa-twitter" style="font-size: 16px;"></i>
                        </button>
                        <button class="w-10 h-10 bg-gray-800 rounded-full p-0 hover:bg-ngo-blue flex items-center justify-center">
                            <i class="fab fa-instagram" style="font-size: 16px;"></i>
                        </button>
                        <button class="w-10 h-10 bg-gray-800 rounded-full p-0 hover:bg-ngo-blue flex items-center justify-center">
                            <i class="fab fa-linkedin-in" style="font-size: 16px;"></i>
                        </button>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">द्रुत दुवे</h3>
                    <ul class="space-y-2">
                        <li><a href="/" class="text-gray-400 hover:text-white">मुख्यपृष्ठ</a></li>
                        <li><a href="/about" class="text-gray-400 hover:text-white">आमच्याबद्दल</a></li>
                        <li><a href="/register" class="text-gray-400 hover:text-white">नोंदणी</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">कार्यक्रम</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">दान</a></li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">संपर्क करा</h3>
                    <div class="space-y-3">
                        <div class="flex items-start">
                            <i data-lucide="map-pin" class="w-5 h-5 mr-3 text-ngo-blue mt-1 flex-shrink-0"></i>
                            <span class="text-gray-400">
                                १२३ आशा रोड<br>पुणे, महाराष्ट्र ४११००१
                            </span>
                        </div>
                        <div class="flex items-center">
                            <i data-lucide="phone" class="w-5 h-5 mr-3 text-ngo-blue"></i>
                            <span class="text-gray-400">+91 98765 43210</span>
                        </div>
                        <div class="flex items-center">
                            <i data-lucide="mail" class="w-5 h-5 mr-3 text-ngo-blue"></i>
                            <span class="text-gray-400">info@nayiumang.org</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-800 mt-8 pt-8 text-center">
                <p class="text-gray-400">
                    © 2024 नवी उमंग. सर्व हक्क राखीव. |
                    <a href="#" class="text-gray-400 hover:text-white mx-1">गोपनीयता धोरण</a> |
                    <a href="#" class="text-gray-400 hover:text-white mx-1">सेवा अटी</a>
                </p>
            </div>
        </div>
    </footer>

    <script>
        // Initialize Lucide icons
        lucide.createIcons();

        // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
    </script>
</body>
</html>
