// import { getMapData, show3dMap } from "@mappedin/mappedin-js";
// import "@mappedin/mappedin-js/lib/index.css";
// // import "./styles.css"

// async function init() {
//   // See Trial API key Terms and Conditions
//   // https://developer.mappedin.com/v6/demo-keys-and-maps/
//   const mapData = await getMapData({
//     key: "mik_yeBk0Vf0nNJtpesfu560e07e5",
//     secret: "mis_2g9ST8ZcSFb5R9fPnsvYhrX3RyRwPtDGbMGweCYKEq385431022",
//     mapId: "64ef49e662fd90fe020bee61",
//   });

//   //Display the default map in the mappedin-map div.
//   const mapView = await show3dMap(
//     document.getElementById("mappedin-map") as HTMLDivElement,
//     mapData
//   );

//   // Get a departure and arrival space.
//   const depart = mapData
//     .getByType("space")
//     .find((space) => space.name === "Focus 103")!;
//   const arrive = mapData
//     .getByType("space")
//     .find((space) => space.name === "Office 210")!;

//   // Get directions between the two spaces.
//   const directions = mapView.getDirections(depart, arrive)!;

//   // Draw the directions on the map.
//   mapView.Navigation.draw(directions);
// }

// init();

const getMap = async (city) => {
    if (!city) {
      return;
    }
    setIsLoading(true);
    const url = `https://easygo-a5wj.onrender.com/api/map/list?city=airport`;
    try {
      const response = await axios.get(url);
      if (response.data.success) {
        setkey(response.data.key);
        setsecret(response.data.secret);
        setmapId(response.data.mapId);
      }
    } catch (error) {
      console.error('Error fetching map data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      getMap("airport");
    }
  }, []);