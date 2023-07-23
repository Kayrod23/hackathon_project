export default function ElectionInfo() {
  return (
    <div className="Election_Info">
      <h1>Election Info</h1>
      <section className="DisplayInfo">
        <p>Location: {ElectionInfo.ElectionLocation}</p>
        <p>Date: {ElectionInfo.ElectionDate}</p>
        <p>Poll Hours: 6am - 9pm</p>
      </section>
      ;
    </div>
  );
}
