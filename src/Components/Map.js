export default function Map() {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title="Joe Wittman Law"
          width="100%"
          height="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=112%20SW%206th%20Ave%20suite%20508,%20Topeka,%20KS%2066603&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
    </div>
  );
}
