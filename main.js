var y=Object.defineProperty;var n=(t,e)=>y(t,"name",{value:e,configurable:!0});var p="SHA-256",o="AES-GCM";async function d(t){let r=(await crypto.subtle.digest(p,new TextEncoder().encode(t))).slice(0,16);return await crypto.subtle.importKey("raw",r,o,!0,["encrypt","decrypt"])}n(d,"getKey");async function i(t,e){let r=await d(t),a=e.slice(0,12),c=e.slice(12),s=await crypto.subtle.decrypt({name:o,iv:a},r,c);return new Uint8Array(s)}n(i,"decryptBinary");async function g(t){let e=window.prompt("Please enter the password:");for(;;)try{return await i(e,t)}catch{e=window.prompt("Incorrect password. Try again:")}}n(g,"decrypt");document.addEventListener("DOMContentLoaded",async function(){let t=document.getElementById("main-content"),e=t.getAttribute("data-href"),a=(await(await fetch(e)).body?.getReader().read())?.value,c=await g(a);t.innerHTML=new TextDecoder().decode(c)});
