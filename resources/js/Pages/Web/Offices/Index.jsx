import { usePage } from "@inertiajs/react";
import React from "react";
import Header from "@/Components/Header";

function Index() {
    // create like index page of products
    const { offices } = usePage().props;
    let img =
        "https://cdn.discordapp.com/attachments/1121901933377101824/1126606678373171320/sami.almamari_avtar_for_indian_girl__hijab_cartoon_215473b4-d1d3-45fd-8b53-ec950b664608.png";

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap  ">
                            {offices.map((office) => (
                                    <OfficeCard key={office.id} office={office} />

                            ))}

       
            </div>
            </div>
        </div>
    );
}

function OfficeCard({ office }) {
    let img = 
        "https://cdn.discordapp.com/attachments/1121901933377101824/1126606678373171320/sami.almamari_avtar_for_indian_girl__hijab_cartoon_215473b4-d1d3-45fd-8b53-ec950b664608.png";
            
    return (
      <a className="flex items-center justify-center h-full" href={`offices/details?id=${office.id}`}>
      <div className="card w-96 bg-base-100 shadow-xl image-full pb-2 pr-2">
          <figure>
              <img src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
              <h2 className="card-title">{office.name}</h2>
              <p>
                    {office.description}
              </p>
              <div className="card-actions justify-end">
                  <button className="btn btn-primary">تصفح المكتب</button>
              </div>
          </div>
      </div>
  </a>
    )
  }
  
export default Index;


