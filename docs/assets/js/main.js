"use strict";const setName=document.querySelector("#name"),cardUserName=document.querySelector(".card-user__name");function getUserName(){const e=setName.value;cardUserName.innerHTML=e,""===e&&(cardUserName.innerHTML="User name")}setName.addEventListener("keyup",getUserName);const setJob=document.querySelector("#job"),cardUserJob=document.querySelector(".card-user__position");function getUserJob(){const e=setJob.value;cardUserJob.innerHTML=e,""===e&&(cardUserJob.innerHTML="User job")}setJob.addEventListener("keyup",getUserJob);const inputEmailEl=document.querySelector("#email");let linkEmailEl=document.querySelector(".email");function handlerEmail(){const e=inputEmailEl.value;linkEmailEl.href=`mailto:${e}`}inputEmailEl.addEventListener("keyup",handlerEmail);const inputTel=document.getElementById("phone"),linkTel=document.getElementById("phone-link");function changeLinkTel(){linkTel.setAttribute("href","tel: +34"+inputTel.value)}inputTel.addEventListener("keyup",changeLinkTel);const setGitHub=document.querySelector("#gitHub"),cardUserGitHub=document.querySelector("#gitHub-link"),iconStyle=document.querySelector("#gitHubEl");function getGitHub(){const e=setGitHub.value;cardUserGitHub.href=`https://github.com/${e}`,""!==e&&iconStyle.classList.add("card__item-list-default")}setGitHub.addEventListener("keyup",getGitHub);const inputLnkdIn=document.querySelector("#linkedin"),linkLnkdIn=document.querySelector(".card__link-linkedin");function handleInputKeyup(){const e=inputLnkdIn.value;linkLnkdIn.href=e}inputLnkdIn.addEventListener("keyup",handleInputKeyup);const arrowIconDesign=document.querySelector("#arrow-design"),sectionDesign=document.querySelector("#section-design"),arrowButtonDesign=document.querySelector("#ButtonDesign");function hideDesignSection(){sectionDesign.classList.toggle("hidden"),arrowIconDesign.classList.toggle("fa-chevron-up"),arrowIconDesign.classList.toggle("fa-chevron-down"),sectionFill.classList.contains("hidden")?sectionShare.classList.contains("hidden")||(sectionShare.classList.add("hidden"),arrowIconShare.classList.toggle("fa-chevron-up"),arrowIconShare.classList.toggle("fa-chevron-down")):(sectionFill.classList.add("hidden"),arrowIconFill.classList.toggle("fa-chevron-up"),arrowIconFill.classList.toggle("fa-chevron-down"))}arrowButtonDesign.addEventListener("click",hideDesignSection);const arrowIconFill=document.querySelector("#arrow-fillTheGap"),sectionFill=document.querySelector(".fillTheGap"),arrowButtonFill=document.querySelector("#ButtonFill");function hideFillSection(){sectionFill.classList.toggle("hidden"),arrowIconFill.classList.toggle("fa-chevron-up"),arrowIconFill.classList.toggle("fa-chevron-down"),sectionDesign.classList.contains("hidden")?sectionShare.classList.contains("hidden")||(sectionShare.classList.add("hidden"),arrowIconShare.classList.toggle("fa-chevron-up"),arrowIconShare.classList.toggle("fa-chevron-down")):(sectionDesign.classList.add("hidden"),arrowIconDesign.classList.toggle("fa-chevron-up"),arrowIconDesign.classList.toggle("fa-chevron-down"))}arrowButtonFill.addEventListener("click",hideFillSection);const arrowIconShare=document.querySelector("#arrow-share"),sectionShare=document.querySelector("#section-share"),arrowButtonShare=document.querySelector("#ButtonShare");function hideShareSection(){sectionShare.classList.toggle("hidden"),arrowIconShare.classList.toggle("fa-chevron-up"),arrowIconShare.classList.toggle("fa-chevron-down"),sectionDesign.classList.contains("hidden")?sectionFill.classList.contains("hidden")||(sectionFill.classList.add("hidden"),arrowIconFill.classList.toggle("fa-chevron-up"),arrowIconFill.classList.toggle("fa-chevron-down")):(sectionDesign.classList.add("hidden"),arrowIconDesign.classList.toggle("fa-chevron-up"),arrowIconDesign.classList.toggle("fa-chevron-down"))}arrowButtonShare.addEventListener("click",hideShareSection);const userName=document.querySelector(".card-user"),inputRed=document.getElementById("palette--red-orange"),inputGrey=document.getElementById("palette--blue-gray"),inputGreen=document.getElementById("palette--blue-green"),contactList=document.querySelector(".card-sm__container");function changePaletteRed(){userName.classList.remove("gray-palette","green-palette","borderLeftGreen","borderLeftGray"),userName.classList.add("red-palette","borderLeftRed"),contactList.classList.remove("gray-palette","green-palette"),contactList.classList.add("red-palette")}function changePaletteGray(){userName.classList.remove("green-palette","red-palette","borderLeftGreen","borderLeftRed"),userName.classList.add("gray-palette","borderLeftGray"),contactList.classList.remove("green-palette","red-palette"),contactList.classList.add("gray-palette")}function changePaletteGreen(){userName.classList.remove("gray-palette","red-palette","borderLeftGray","borderLeftRed"),userName.classList.add("green-palette","borderLeftGreen"),contactList.classList.remove("gray-palette","red-palette"),contactList.classList.add("green-palette")}function emailCircle(){const e=document.getElementById("email-li");""===document.getElementById("email").value?(e.classList.add("card__item-list-no-border"),e.classList.remove("card__item-list")):(e.classList.remove("card__item-list-no-border"),e.classList.add("card__item-list"))}inputRed.addEventListener("click",changePaletteRed),inputGrey.addEventListener("click",changePaletteGray),inputGreen.addEventListener("click",changePaletteGreen);const mailInput=document.getElementById("email");function phoneCircle(){const e=document.getElementById("phone-li");""===document.getElementById("phone").value?(e.classList.add("card__item-list-no-border"),e.classList.remove("card__item-list")):(e.classList.remove("card__item-list-no-border"),e.classList.add("card__item-list"))}mailInput.addEventListener("keyup",emailCircle);const phoneInput=document.getElementById("phone");function linkedinCircle(){const e=document.getElementById("linkedin-li");""===document.getElementById("linkedin").value?(e.classList.add("card__item-list-no-border"),e.classList.remove("card__item-list")):(e.classList.remove("card__item-list-no-border"),e.classList.add("card__item-list"))}phoneInput.addEventListener("keyup",phoneCircle);const linkedinInput=document.getElementById("linkedin");function githubCircle(){const e=document.getElementById("gitHubEl");""===document.getElementById("gitHub").value?(e.classList.add("card__item-list-no-border"),e.classList.remove("card__item-list")):(e.classList.remove("card__item-list-no-border"),e.classList.add("card__item-list"))}linkedinInput.addEventListener("keyup",linkedinCircle);const githubInput=document.getElementById("gitHub");githubInput.addEventListener("keyup",githubCircle);