import {Localized} from '../components/i18n/LanguageProvider';
import SiteHeader from "../components/SiteHeader";
import Blog from "../components/Blog";
export default function BlogPage(){return <Localized>{<div className="homepage"><SiteHeader/><main><a className="blog-back" href="/">← Back to generator</a><Blog fullList/></main></div>}</Localized>;}
