import { useState } from "react";
import NamesByDay from "./comps/NamesByDay";

export default function App() {
  let [names, setNames] = useState([
    "https://therealcatato.com/",
    "https://www.detroitseniorcare.com/",
    "https://www.desertbelle.com/",
    "https://www.lms.org/",
    "https://www.alosaz.com/",
    "https://ltainfo.com/",
    "https://www.csassistedliving.com/",
    "https://www.seniorcarewebsites.com/",
    "https://www.nichewebmarketing.com/",
    "https://www.assistedlivingphx.com/",
    "https://www.berrierinsurance.com/",
    "https://www.heartuniversity.org/",
    "https://www.newachdlearningcenter.org/",
    "https://www.pediatriccardiaclearningcenter.org/",
    "https://watsonpestcontrol.com/",
    "https://www.irvineseniorcare.com/",
    "https://moxiesolar.com/",
    "https://brettsautoservice.com/",
    "https://www.traya-ps.org/",
    "https://eastvalleycarpetcleaning.com/",
    "https://saguarodockside.com/",
    "https://www.womenscareonline.com/",
    "https://www.groomsmengiftstore.com/",
    "https://simonroofit.comfountain-hills/",
    "https://northscottsdaleseo.com/",
    "https://regularvegans.com/",
    "https://az-websites.com/",
    "https://rockpaperthis.com/",
    "https://fountainhillsart.com/",
    "https://www.fourpass.co.uk/",
    "https://www.tiffanytaylorhair.com/",
    "https://www.pinnaclepeakseniorliving.com/",
    "https://eastsheaal.com/",
    "https://www.duplicatorproplugin.com/",
    "https://www.senior-living-directory.com/",
    "https://www.bkdirectory.com/",
    "https://www.bankruptcyseocompany.com/",
    "https://www.arizonabankruptcyhelp.com/",
    "https://www.localseotools.com/",
  ]);

  return (
    <div className="m-4 bg-slate-100 border border-slate-400 rounded">
      <NamesByDay names={names} numberOfNamesPerDay={5} />
    </div>
  );
}
