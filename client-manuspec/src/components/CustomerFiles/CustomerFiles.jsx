import "./CustomerFiles.scss";

function CustomerFiles() {
  return (
    <>
      <div className="customer-info__files-nav">
        <div className="customer-info__nav">
          <p className="customer-info__id-nav">ID#</p>
          <p className="customer-info__date-nav">Date Created</p>
          <p className="customer-info__file-nav">File</p>
          <p className="customer-info__tech-nav">Technician</p>
        </div>
      </div>
      <div className="customer-info__files">
        <div className="customer-info__list">
          <p className="customer-info__id">ID: 4</p>
          <p className="customer-info__date">1 day ago</p>
          <p className="customer-info__file">View</p>
          <p className="customer-info__tech">Technician</p>
        </div>
      </div>
      <div className="customer-info__files">
        <div className="customer-info__list">
          <p className="customer-info__id">ID: 3</p>
          <p className="customer-info__date">2 weeks ago</p>
          <p className="customer-info__file">View</p>
          <p className="customer-info__tech">Technician</p>
        </div>
      </div>
      <div className="customer-info__files">
        <div className="customer-info__list">
          <p className="customer-info__id">ID: 2</p>
          <p className="customer-info__date">4 weeks ago</p>
          <p className="customer-info__file">View</p>
          <p className="customer-info__tech">Technician</p>
        </div>
      </div>
      <div className="customer-info__files">
        <div className="customer-info__list">
          <p className="customer-info__id">ID: 1</p>
          <p className="customer-info__date">3 months ago</p>
          <p className="customer-info__file">View</p>
          <p className="customer-info__tech">Technician</p>
        </div>
      </div>
    </>
  );
}

export default CustomerFiles;
