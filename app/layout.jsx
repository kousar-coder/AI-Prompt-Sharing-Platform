import '@styles/global.css'

export const metadata = {
    title:"promptly",
    description:'Discover & share AI prompts'
}


const RootLayout = ({children}) => {
  return (
<html lang="en">
    <body>
        <div className="main">
           <div className="gradient"/>
        </div>
        <div>
<main className="app">
    {children}
</main>
        </div>
    </body>
    </html>
  );
}

export default RootLayout;
