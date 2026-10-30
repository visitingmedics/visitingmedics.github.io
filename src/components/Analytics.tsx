import Script from "next/script";
import { site } from "@/config/site";

// Google Analytics 4. It stays off until site.gaId is set in src/config/site.ts.
// It also records taps on call and WhatsApp links, so you can see how many enquiries the site brings.
export default function Analytics() {
  const id = site.gaId;
  if (!id) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${id}',{anonymize_ip:true});document.addEventListener('click',function(e){var a=e.target&&e.target.closest?e.target.closest('a'):null;if(!a)return;var h=a.getAttribute('href')||'';if(h.indexOf('tel:')===0){gtag('event','click_call')}else if(h.indexOf('wa.me')>-1){gtag('event','click_whatsapp')}});`}</Script>
    </>
  );
}
