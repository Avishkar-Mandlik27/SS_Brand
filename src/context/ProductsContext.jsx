import React, { createContext, useContext } from "react";


import CastorImg1 from "../assets/products/CastorOil1.png";
import CastorImg2 from "../assets/products/CastorOil2.jpg";
import CastorImg3 from "../assets/products/CastorOil3.jpg";

import FlaxSeedImg1 from "../assets/products/FlaxSeedOil1.png";
import FlaxSeedImg2 from "../assets/products/FlaxSeedOil2.jpg";
import FlaxSeedImg3 from "../assets/products/FlaxSeedOil3.jpg";

import CoconutOilImg1 from "../assets/products/CoconutOil1.png";
import CoconutOilImg2 from "../assets/products/CoconutOil2.jpg";
import CoconutOilImg3 from "../assets/products/CoconutOil3.jpg";

import MustardOilImg1 from "../assets/products/MustardOil1.png";
import MustardOilImg2 from "../assets/products/MustardOil2.jpg";
import MustardOilImg3 from "../assets/products/MustardOil3.jpg";

import SafflowerOilImg1 from "../assets/products/Safflower1.jpg";
import SafflowerOilImg2 from "../assets/products/Safflower2.jpg";
import SafflowerOilImg3 from "../assets/products/Safflower3.jpg";
import SafflowerOilImg4 from "../assets/products/Safflower4.jpg";

import SesameOilImg1 from "../assets/products/SesameOil1.jpg";
import SesameOilImg2 from "../assets/products/SesameOil2.jpg";
import SesameOilImg3 from "../assets/products/SesameOil3.jpg";
import SesameOilImg4 from "../assets/products/SesameOil4.jpg";

import SunflowerOilImg1 from "../assets/products/SunflowerOil1.jpg";
import SunflowerOilImg2 from "../assets/products/SunflowerOil2.jpg";
import SunflowerOilImg3 from "../assets/products/SunflowerOil3.jpg";
import SunflowerOilImg4 from "../assets/products/SunflowerOil4.jpg";

// Create the context
const ProductsContext = createContext();

// Hook to access context
export const useProducts = () => useContext(ProductsContext);

// Provider component
export const ProductsProvider = ({ children }) => {
    const products = [
        {
            id: 1,
            name: { EN: "Castor Oil", MR: "एरंडीचे तेल" },
            image: [CastorImg1, CastorImg2, CastorImg3],
            price: { "500ml": "₹180", "1L": "₹340" },
            process: {
                EN: "Our castor oil is extracted through a traditional wooden cold-pressed (ghani) method, preserving all the essential nutrients and natural aroma.",
                MR: "आमचे एरंडीचे तेल पारंपारिक लाकडी घाणीतून थंड दाब पद्धतीने काढले जाते, ज्यामुळे सर्व पोषक घटक आणि नैसर्गिक सुगंध टिकून राहतात."
            },
            benefits: {
                EN: [
                    "Promotes healthy hair growth.",
                    "Moisturizes dry skin and improves texture.",
                    "Relieves joint stiffness and mild inflammation.",
                    "Can be used as a natural laxative."
                ],
                MR: [
                    "केसांची वाढ सुधारते.",
                    "कोरडी त्वचा ओलसर ठेवते आणि पोत सुधारते.",
                    "सांध्यातील कडकपणा आणि सूज कमी करते.",
                    "नैसर्गिक रेचक म्हणून वापरता येते."
                ]
            },
            rating: 4.8,
            reviews: [
                { name: "Aarav Patil", rating: 5, review: "Excellent quality and authentic aroma. Works wonders for my hair." },
                { name: "Sneha Kulkarni", rating: 4.7, review: "Very thick and pure, helps with skin hydration." },
                { name: "Rahul Deshmukh", rating: 4.8, review: "Used for massage, very effective for joints." },
                { name: "Priya Joshi", rating: 5, review: "Pure and unrefined. Great product overall!" }
            ]
        },
        {
            id: 2,
            name: { EN: "FlaxSeed Oil", MR: "जवसाचे तेल" },
            image: [FlaxSeedImg1, FlaxSeedImg2, FlaxSeedImg3],
            price: { "500ml": "₹150", "1L": "₹280" },
            process: {
                EN: "Flaxseeds are cold-pressed to extract oil rich in Omega-3. Naturally filtered without refining to preserve nutrition.",
                MR: "जवसाचे तेल ओमेगा-३ ने समृद्ध आहे आणि थंड दाब पद्धतीने काढले जाते. नैसर्गिकरीत्या गाळले जाते, रिफायनिंग केले जात नाही."
            },
            benefits: {
                EN: [
                    "Supports heart and brain health.",
                    "Reduces body inflammation.",
                    "Improves skin smoothness.",
                    "Aids in digestion and weight balance."
                ],
                MR: [
                    "हृदय आणि मेंदूचे आरोग्य सुधारते.",
                    "शरीरातील सूज कमी करते.",
                    "त्वचा मऊ ठेवते.",
                    "पचन आणि वजन नियंत्रणात मदत करते."
                ]
            },
            rating: 4.6,
            reviews: [
                { name: "Kiran More", rating: 4.7, review: "Best cold-pressed flaxseed oil with natural taste." },
                { name: "Ankita Joshi", rating: 4.5, review: "Good texture and perfect for salads." },
                { name: "Vikram Shinde", rating: 4.8, review: "Helped improve my cholesterol levels." },
                { name: "Riya Naik", rating: 5, review: "Pure, fresh, and well-packaged product." }
            ]
        },
        {
            id: 3,
            name: { EN: "Coconut Oil", MR: "नारळाचे तेल" },
            image: [CoconutOilImg1, CoconutOilImg2, CoconutOilImg3],
            price: { "500ml": "₹160", "1L": "₹300" },
            process: {
                EN: "Made from fresh coconuts using cold-pressed extraction to retain natural aroma and nutrients.",
                MR: "ताज्या नारळांपासून थंड दाब पद्धतीने तयार केले जाते, ज्यामुळे नैसर्गिक सुगंध आणि पोषक घटक टिकतात."
            },
            benefits: {
                EN: [
                    "Deeply nourishes hair and scalp.",
                    "Excellent natural moisturizer.",
                    "Boosts metabolism and immunity.",
                    "Supports oral and skin health."
                ],
                MR: [
                    "केस आणि टाळूसाठी पोषक.",
                    "नैसर्गिक मॉइश्चरायझर.",
                    "मेटाबॉलिझम आणि रोगप्रतिकारशक्ती वाढवते.",
                    "त्वचा आणि मुख आरोग्यासाठी उपयुक्त."
                ]
            },
            rating: 4.9,
            reviews: [
                { name: "Rohit Kale", rating: 5, review: "So pure — smells like fresh coconut. Great for cooking too!" },
                { name: "Meena Desai", rating: 4.8, review: "Loved using it for oil pulling and skincare." },
                { name: "Ajay Bhise", rating: 4.9, review: "Natural and unrefined — very good quality." },
                { name: "Pooja Nair", rating: 5, review: "Light texture and pure aroma. 100% satisfied." }
            ]
        },
        {
            id: 4,
            name: { EN: "Mustard Oil", MR: "मोहरीचे तेल" },
            image: [MustardOilImg1, MustardOilImg2, MustardOilImg3],
            price: { "500ml": "₹140", "1L": "₹260" },
            process: {
                EN: "Traditionally extracted from mustard seeds using wooden cold-press for high purity.",
                MR: "मोहरीच्या बियाण्यांपासून पारंपारिक लाकडी घाणीतून तेल काढले जाते, ज्यामुळे शुद्धता टिकते."
            },
            benefits: {
                EN: [
                    "Enhances skin glow and hair health.",
                    "Improves blood circulation.",
                    "Rich in Omega-3 and antioxidants.",
                    "Helps in relieving joint pain."
                ],
                MR: [
                    "त्वचेला चमक आणि केसांना पोषण देते.",
                    "रक्ताभिसरण सुधारते.",
                    "ओमेगा-३ आणि अँटिऑक्सिडंट्सने भरलेले.",
                    "सांधेदुखीपासून आराम देते."
                ]
            },
            rating: 4.7,
            reviews: [
                { name: "Amruta Gokhale", rating: 4.8, review: "Authentic aroma and taste — reminds me of homemade oil." },
                { name: "Suresh Jadhav", rating: 4.6, review: "Perfect for cooking and massage both." },
                { name: "Nikita Pawar", rating: 4.9, review: "Strong aroma, good quality. Feels pure." },
                { name: "Deepak K", rating: 4.7, review: "Best mustard oil I’ve used so far." }
            ]
        },
        {
            id: 5,
            name: { EN: "Safflower Oil", MR: "कर्डईचे तेल" },
            image: [SafflowerOilImg1, SafflowerOilImg2, SafflowerOilImg3, SafflowerOilImg4],
            price: { "500ml": "₹170", "1L": "₹320" },
            process: {
                EN: "Cold-pressed from premium safflower seeds to preserve natural Vitamin E and linoleic acid.",
                MR: "कर्डईच्या बियाण्यांपासून थंड दाब पद्धतीने काढले जाते, ज्यामुळे नैसर्गिक व्हिटॅमिन ई टिकते."
            },
            benefits: {
                EN: [
                    "Helps maintain healthy cholesterol levels.",
                    "Improves heart and skin health.",
                    "Rich in Vitamin E and essential fats.",
                    "Light texture and mild taste."
                ],
                MR: [
                    "कोलेस्टेरॉल नियंत्रित ठेवते.",
                    "हृदय आणि त्वचा आरोग्य सुधारते.",
                    "व्हिटॅमिन ई आणि फॅट्सने समृद्ध.",
                    "हलके आणि सौम्य चवीचे."
                ]
            },
            rating: 4.7,
            reviews: [
                { name: "Sonal K", rating: 4.8, review: "Really light and fresh oil, perfect for everyday cooking." },
                { name: "Prasad Khot", rating: 4.7, review: "Pure safflower aroma — totally natural." },
                { name: "Gauri Joshi", rating: 4.9, review: "Healthy and tastes amazing!" },
                { name: "Akash Patil", rating: 4.8, review: "Good packaging, nice mild flavor." }
            ]
        },
        {
            id: 6,
            name: { EN: "Sesame Oil", MR: "तीळाचे तेल" },
            image: [SesameOilImg1, SesameOilImg2, SesameOilImg3, SesameOilImg4],
            price: { "500ml": "₹160", "1L": "₹300" },
            process: {
                EN: "Extracted from high-quality sesame seeds using traditional ghani method without any chemicals.",
                MR: "उच्च प्रतीच्या तिळांपासून पारंपारिक घाणीतून रासायनिक पदार्थांशिवाय काढले जाते."
            },
            benefits: {
                EN: [
                    "Strengthens bones and joints.",
                    "Improves hair texture and shine.",
                    "Boosts oral and heart health.",
                    "Great for traditional massage therapy."
                ],
                MR: [
                    "हाडे आणि सांधे मजबूत करते.",
                    "केसांचा पोत आणि चमक सुधारते.",
                    "मुख आणि हृदय आरोग्य सुधारते.",
                    "पारंपारिक मालिशसाठी उपयुक्त."
                ]
            },
            rating: 4.8,
            reviews: [
                { name: "Manoj Desai", rating: 4.8, review: "Authentic til oil! Very aromatic and pure." },
                { name: "Aditi Naik", rating: 5, review: "Perfect for cooking and oil pulling. Love it!" },
                { name: "Shrikant More", rating: 4.7, review: "Feels like freshly pressed oil — good quality." },
                { name: "Leena Patil", rating: 4.9, review: "Superb aroma and texture. Great product!" }
            ]
        },
        {
            id: 7,
            name: { EN: "Sunflower Oil", MR: "सूर्यफुलाचे तेल" },
            image: [SunflowerOilImg1, SunflowerOilImg2, SunflowerOilImg3, SunflowerOilImg4],
            price: { "500ml": "₹150", "1L": "₹270" },
            process: {
                EN: "Cold-pressed from fresh sunflower seeds to retain Vitamin E and Omega-6 fats naturally.",
                MR: "ताज्या सूर्यफुलाच्या बियाण्यांपासून थंड दाब पद्धतीने तयार केले जाते, व्हिटॅमिन ई नैसर्गिकरीत्या टिकवले जाते."
            },
            benefits: {
                EN: [
                    "Supports healthy heart function.",
                    "Improves skin smoothness.",
                    "Boosts energy and immunity.",
                    "Perfect for light frying and daily cooking."
                ],
                MR: [
                    "हृदयाचे कार्य सुधारते.",
                    "त्वचा मऊ ठेवते.",
                    "ऊर्जा आणि रोगप्रतिकारशक्ती वाढवते.",
                    "दररोजच्या स्वयंपाकासाठी योग्य."
                ]
            },
            rating: 4.6,
            reviews: [
                { name: "Tejaswini Pawar", rating: 4.7, review: "Light and fresh. Doesn’t feel greasy." },
                { name: "Ganesh Bhagat", rating: 4.5, review: "Good for daily cooking, nice aroma." },
                { name: "Kavita More", rating: 4.6, review: "Mild and pure, loved the quality." },
                { name: "Rajesh Bane", rating: 4.7, review: "Affordable and healthy option." }
            ]
        }
    ];


    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
};
export default ProductsContext;