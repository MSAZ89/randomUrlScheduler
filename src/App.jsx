import { useState } from "react";
import NamesByDay from "./comps/NamesByDay";

export default function App() {
  let [names, setNames] = useState([
    "https://www.senior-living-directory.com/maryland/catonsville/senior-care-facility/lifespring-assisted-living",
    "https://www.senior-living-directory.com/maryland/pasadena/senior-care-facility/locust-lodge-assisted-living",
    "https://www.senior-living-directory.com/maryland/catonsville/senior-care-facility/rolling-meadows-assisted-living",
    "https://www.senior-living-directory.com/maryland/pikesville/senior-care-facility/woodholme-springs-assisted-living",
    "https://www.senior-living-directory.com/kansas/wichita/senior-care-facility/comfort-and-love-senior-care-homes",
    "https://www.senior-living-directory.com/arizona/scottsdale/senior-care-facility/hummingbird-haven-assisted-living",
    "https://www.senior-living-directory.com/arizona/scottsdale/senior-care-facility/the-valencia-home",
    "https://www.senior-living-directory.com/arizona/scottsdale/senior-care-facility/north-scottsdale-retreat",
    "https://www.senior-living-directory.com/arizona/scottsdale/senior-care-facility/valencia-at-60th-street-assisted-living",
    "https://www.senior-living-directory.com/arizona/phoenix/senior-care-facility/valencia-at-47th-place-assisted-living",
    "https://www.senior-living-directory.com/arizona/scottsdale/senior-care-facility/central-scottsdale-assisted-living",
    "https://www.senior-living-directory.com/arizona/phoenix/senior-care-facility/valencia-at-19th-1",
    "https://www.senior-living-directory.com/arizona/phoenix/senior-care-facility/valencia-at-19th-2",
    "https://www.senior-living-directory.com/arizona/phoenix/senior-care-facility/casa-valencia",
    "https://www.senior-living-directory.com/arizona/phoenix/senior-care-facility/leti-s-at-valencia",
    "https://www.senior-living-directory.com/arizona/paradise-valley/senior-care-facility/camelback-residential-assisted-living",
    "https://www.senior-living-directory.com/arizona/paradise-valley/senior-care-facility/lincoln-luxury-assisted-living",
    "https://www.senior-living-directory.com/arizona/scottsdale/senior-care-facility/southwest-comfort-care",
    "https://www.senior-living-directory.com/ohio/milford/in-home-health-care/home-matters-caregiving-cincinnati-northern-ky",
    "https://www.senior-living-directory.com/oregon/beaverton/in-home-health-care/home-matters-caregiving",
    "https://www.senior-living-directory.com/georgia/atlanta/in-home-health-care/home-matters-caregiving-north-atlanta",
    "https://www.seniorcaredirectory.com/arizona/scottsdale/top-level-category/pinnacle-peak-assisted-living",
    "https://www.seniorcaredirectory.com/arizona/tucson/top-level-category/aspen-care-home",
    "https://www.attorneydir.com/nevada/las-vegas/attorney/vegas-counsel",
    "https://www.seniorcaredirectory.com/arizona/scottsdale/top-level-category/southwest-comfort-care",
    "https://www.seniorcaredirectory.com/arizona/mesa/top-level-category/red-mountain-assisted-living",
    "https://www.seniorcaredirectory.com/arizona/scottsdale/top-level-category/senior-valley-assisted-living",
    "https://www.seniorcaredirectory.com/michigan/livonia/top-level-category/woodhaven-retirement-community",
    "https://www.seniorcaredirectory.com/arizona/tucson/top-level-category/casas-adobes-assisted-living",
    "https://www.seniorcaredirectory.com/arizona/tucson/top-level-category/casas-chapala-assisted-living",
    "https://www.seniorcaredirectory.com/arizona/scottsdale/top-level-category/the-valencia-home-by-md-senior-living",
    "https://www.seniorcaredirectory.com/arizona/scottsdale/top-level-category/north-scottsdale-retreat",
    "https://www.seniorcaredirectory.com/arizona/scottsdale/top-level-category/central-scottsdale-assisted-living",
    "https://www.seniorcaredirectory.com/ohio/milford/top-level-category/home-matters-caregiving-cincinnati-northern-ky",
    "https://www.seniorcaredirectory.com/oregon/beaverton/top-level-category/home-matters-caregiving",
    "https://www.seniorcaredirectory.com/georgia/atlanta/top-level-category/home-matters-caregiving-north-atlanta",
  ]);

  return (
    <div className="m-4 bg-slate-100 border border-slate-400 rounded">
      <NamesByDay names={names} numberOfNamesPerDay={6} />
    </div>
  );
}
