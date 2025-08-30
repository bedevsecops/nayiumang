<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $volunteers = [
            [
                'name' => 'सुनिता देशमुख',
                'role' => 'मार्गदर्शन समन्वयक',
                'description' => 'गरीब कुटुंबांना योग्य दिशा दाखवणे आणि त्यांच्या समस्यांचे उपाय शोधण्यात मदत करणे.',
                'image_url' => 'https://images.unsplash.com/photo-1594824801314-020d6fa4ddc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
            ],
            [
                'name' => 'राहुल कुलकर्णी',
                'role' => 'संसाधन समन्वयक',
                'description' => 'गरजू कुटुंबांसाठी शिक्षण साहित्य, कपडे आणि आवश्यक वस्तू गोळा करून वितरण करणे.',
                'image_url' => 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
            ],
            [
                'name' => 'डॉ. प्रिया शर्मा',
                'role' => 'आरोग्य सल्लागार',
                'description' => 'गरीब कुटुंबांना मोफत आरोग्य तपासणी आणि वैद्यकीय सल्ला देणे.',
                'image_url' => 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
            ],
            [
                'name' => 'अमित पाटील',
                'role' => 'शिक्षण समन्वयक',
                'description' => 'मुलांना मोफत शिक्षण देणे आणि त्यांच्या भविष्यासाठी योग्य मार्गदर्शन करणे.',
                'image_url' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
            ]
        ];

        return view('home', compact('volunteers'));
    }

    public function about()
    {
        $programs = [
            [
                'icon' => 'graduation-cap',
                'title' => 'शैक्षणिक मार्गदर्शन',
                'description' => 'मुलांना योग्य शिक्षणाची दिशा दाखवणे आणि त्यांच्या भविष्यासाठी मार्गदर्शन करणे.',
                'color' => 'bg-blue-500'
            ],
            [
                'icon' => 'heart',
                'title' => 'भावनिक आधार',
                'description' => 'कठीण परिस्थितीत कुटुंबांना भावनिक आधार देणे आणि त्यांचे मनोबल वाढवणे.',
                'color' => 'bg-red-500'
            ],
            [
                'icon' => 'users',
                'title' => 'संसाधन एकत्रीकरण',
                'description' => 'समुदायातील संसाधने एकत्र करून गरजू लोकांपर्यंत पोहोचवणे.',
                'color' => 'bg-green-500'
            ],
            [
                'icon' => 'target',
                'title' => 'कौशल्य प्रशिक्षण',
                'description' => 'रोजगारासाठी आवश्यक कौशल्यांचे मोफत प्रशिक्षण देणे.',
                'color' => 'bg-purple-500'
            ]
        ];

        return view('about', compact('programs'));
    }
}