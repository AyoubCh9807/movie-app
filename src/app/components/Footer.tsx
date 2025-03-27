import LanguageSelector from "./LangSelector";

function Footer() {
  return (
    <footer className="font-bold text-gray-400">
      <div className="flex flex-col align-start justify-items-start gap-10 mt-10 p-2">
        <div className="mx-5">
          <p>Questions ? Contact Us.</p>
        </div>

        <div className="flex flex-row justify-evenly align-cente px-10">
          <div className="flex flex-col align-start justify-evenly gap-5" >
            <a href="" className="underline">FAQ</a>
            <a href="" className="underline">Use Conditions</a>
            <a href="" className="underline">Cookies Preferences</a>
          </div>
          <div className="flex flex-col align-start justify-evenly gap-5">
            <a href="" className="underline">Help Center</a>
            <a href="" className="underline">Privacy</a>
            <a href="" className="underline">Legal Mentions</a>
          </div>
        </div>

        <div className="mx-5">
          <LanguageSelector />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
