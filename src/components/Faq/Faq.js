import React from 'react';
import './Faq.css'
const Faq = () => {
    return (
        <div className='faq-section'>
            <div className="faq">
                <h2>How react works?</h2>
                <p>React একটি জাভাস্ক্রিপ্ট library। এটি মূলত single page application এবং mobile apps এর user interface বানাতে সাহায্য করে। React works in declearative code। declearative code বলতে মনে করো তুমি একটি রেস্টুরেন্ট এ গিয়ে ওয়েটার কে বললে তুমি কি খেতে চাও। কিন্তু তুমি রান্নাঘরে গিয়ে রাঁধুনি বলবে না যে কিভাবে রান্না করতে হবে। React এ আমরা মূলত components create করে কাজ করি। প্রত্যেক components এর মধ্যে html এর মতো jSX লিখে থাকি। প্রত্যেক components এর মধ্যে props এর মাধ্যমে useState থেকে data রিছিভ করা হয়। আর বাইরের থেকে ডটা লোড করতে হলে useEffect ব্যবহার করতে হয়।</p>
            </div>
            <div className="faq">
                <h2>Props vs State difference</h2>
                <p><b>Props are read only.</b></p>
                <p>State changes can be asynchronous.</p>
                <p><b> Props are immutable </b></p>
                <p>State is mutable.</p>
                <p><b>Props can be accessed by the child component </b></p>
                <p>State cannot be accessed by child components </p>
                <p><b>Props make components reusable </b></p >
                <p>State cannot make components reusable </p>
                <p><b>Stateless component can have Props.</b></p>
                <p>Stateless components cannot have State.</p>
            </div >
        </div >
    );
};

export default Faq;