import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

const cards = [
    //{ text: 'Hello', linkText: 'someLink', href: '/' }
];

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="bg-white font-gabarito">
        <div className="min-h-screen flex flex-col 	justify-between text-black pt-10">
          <div className="flex justify-between max-lg:flex-col ">
            <h1 className=" text-5xl font-youngs pt-10 pl-10">
              Esyn taideryhmä
            </h1>
            <div className="p-10 max-lg:p-0">
              <p className="text-right text-3xl font-allura items-center p-5 ">
                Valo ja varjo - Elämän lähteellä
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <img
              className="object-cover max-w-[70vw] max-h-[60vh] min-w-0 border-8 border-white bg-white"
              src="/esy-logo.png"
              alt="image description"
            />
          </div>
          <div className="">
            <p className="min-height: 7em; text-center items-center pb-10 pl-10 pr-10 mt-5 max-w-screen-xl mx-auto ">
              Töiden johdantona ovat seuraavat raamatun paikat: Ps. 36:8-10,
              Joh. 7:37-39 ja Ps. 1:1-3
            </p>

            <div className="mx-auto w-1/2">
              <div className="max-w-[100%] ">
                <div className="h-[100px] text-center">
                  <h1>Ryhmään osallistuneet taitailijat - Jukka Jokelainen</h1>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

/*
                 <Poem
                        name={names[i]}
                        poem={descriptions[i]}
                        image={images[i]}
                      />


                                      {descriptions.map(function (object, i) {
                  return (
                    <div>
                      <div className="p-3 bg-slate-800"></div>
                      <div className="p-5"></div>



     



                      <div className="p-10"></div>
                    </div>
                  );
                })}
                      */
function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return <Card title={title} text="Next.js will rebuild any page you navigate to, including static pages." />;
    } else {
        return <Card title={title} text="This page was statically-generated at build time." />;
    }
}
