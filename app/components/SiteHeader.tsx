"use client";
import {useState} from 'react';
import {ChevronDown,Globe,Menu,X} from 'lucide-react';

type Page = 'home'|'qr'|'barcode'|'scanner';
export default function SiteHeader({active='home',onQRType}:{active?:Page;onQRType?:(type:string)=>void}) {
 const [mobile,setMobile]=useState(false),[notice,setNotice]=useState('');
 const close=(event:React.MouseEvent<HTMLElement>)=>{event.currentTarget.closest('details')?.removeAttribute('open');setMobile(false);};
 return <><header className="home-header"><div className="home-header-inner">
  <a href="/" className="home-brand" aria-label="QR and barcode home"><img src="/assets/svg/Group 42404.svg" alt=""/><span>QR &amp; barcode</span></a>
  <button className="home-menu-toggle" aria-label={mobile?'Close navigation':'Open navigation'} aria-expanded={mobile} aria-controls="main-navigation" onClick={()=>setMobile(!mobile)}>{mobile?<X/>:<Menu/>}</button>
  <nav id="main-navigation" className={'home-navigation'+(mobile?' is-open':'')} aria-label="Main navigation">
   {([['home','/','Home'],['qr','/qr-code-generator','QR Code Generator'],['barcode','/barcode-generator','Barcode Generator']] as const).map(([id,url,label])=><a key={id} href={url} className={'home-nav-link'+(active===id?' is-active':'')} aria-current={active===id?'page':undefined}>{label}</a>)}
   <a href="/scanner" className={'home-nav-link'+(active==='scanner'?' is-active':'')} aria-current={active==='scanner'?'page':undefined} onClick={close}>Scanner</a>
   <details className="home-dropdown"><summary>{active==='barcode'||active==='scanner'?'QR & Barcode Types':'QR Code All Types'}<ChevronDown size={12}/></summary><div className="home-dropdown-panel">{['Website','Wi-Fi','Text','Contacts','Email','WhatsApp'].map(type=><a key={type} href={'/qr-code-generator?type='+encodeURIComponent(type)} onClick={event=>{if(onQRType){event.preventDefault();onQRType(type);document.getElementById('generator')?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}close(event);}}>{type}</a>)}</div></details>
   <details className="home-dropdown"><summary>Resources<ChevronDown size={12}/></summary><div className="home-dropdown-panel"><a href="/blog" onClick={close}>Blog</a><a href="#faq" onClick={close}>FAQ</a><button onClick={event=>{close(event);setNotice('Help Center will be added later.');}}>Help Center</button></div></details>
   <button className="home-nav-link" onClick={()=>setNotice('Pricing will be added later.')}>Pricing</button>
   <div className="home-account"><a className="home-sign-in" href="/login">Sign In</a><a className="home-sign-up" href="/signup">Sign Up</a></div>
   <details className="home-dropdown home-language"><summary><Globe size={19}/>EN<ChevronDown size={12}/></summary><div className="home-dropdown-panel"><button onClick={close}>English</button><button onClick={event=>{close(event);setNotice('Bangla translation will be added later.');}}>বাংলা</button></div></details>
  </nav>
 </div></header>{notice&&<div className="home-toast" role="status">{notice}<button aria-label="Dismiss notification" onClick={()=>setNotice('')}><X size={18}/></button></div>}</>;
}
