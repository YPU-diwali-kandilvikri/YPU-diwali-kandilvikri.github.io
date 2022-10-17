const heading = document.querySelector(".heading");
const description = document.querySelector(".description");

// Form elements
const langSelector = document.querySelector("#langSelector");
console.log(langSelector);
langSelector.addEventListener("click", () => {
  let language = langSelector.innerHTML;
  if (language == "मराठी") {
    heading.innerHTML = "आमच्या बद्दल";
    description.innerHTML =
      "‘ज्ञान प्रबोधिनी’ ची स्थापना १९६२ मध्ये विनायक विश्वनाथ तथा अप्पासाहेब पेंडसे यांनी समाजात शिक्षणाने बदल घडवून आणण्यासाठी केली. राष्ट्रहिताचा विचार, देशाचे नेतृत्व व भारताचा विकास करू शकतील असे राष्ट्रनेते घडवणे हे अप्पांचे स्वप्न होते. हाच विचार मनात घेऊन ज्ञान प्रबोधिनीच्या युवक विभागाने मुलांना उद्योजकतेचं प्रशिक्षण मिळावं म्हणून ‘युवक प्रबोधन उद्योग’ हा उपक्रम सुरू केला. युवक प्रबोधन उद्योगाच्या माध्यमातून मुले पूर्वी फटाके तर आता स्वतः बनवलेले आकर्षक कंदील, स्वतः रंगवलेल्या पणत्या अश्या अनेक वस्तूंची विक्री करून उद्योजकतेचं प्रशिक्षण घेतात व त्यासोबतच ग्राहकांची दिवाळी पण प्रकाशमय करतात.";
    langSelector.innerHTML = "English";
  }
  if (language == "English") {
    heading.innerHTML = "About us";
    description.innerHTML =
      "`Jnana Prabodhini` was founded in 1962 by Vinayak Vishwanath alias Appasaheb Pendse to bring about change in the society through education. Appa's dream was to create national leaders who can think of national interest, lead the country and develop India. With this thought in mind, the youth department of Jnana Prabodhini started the initiative 'Yuvak Prabodhan Udyog' to train the children in entrepreneurship. Through the Youth Enlightenment Udyog, children are trained in entrepreneurship by selling many items like firecrackers, now self-made attractive lanterns, self-painted garlands, and along with this, brighten up the customers' Diwali.";
    langSelector.innerHTML = "मराठी";
  }
});
