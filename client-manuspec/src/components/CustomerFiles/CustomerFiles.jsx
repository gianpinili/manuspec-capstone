import "./CustomerFiles.scss";

function CustomerFiles() {
  return (
    <>
      <div className="customer-info__files">
        <div className="customer-info__nav">
          <p className="customer-info__id-nav">ID#</p>
          <p className="customer-info__date-nav">Date Created</p>
          <p className="customer-info__file-nav">File</p>
          <p className="customer-info__tech-nav">Technician</p>
          <p className="customer-info__action">Action</p>
        </div>
      </div>
      <div className="customer-info__files">
        <div className="customer-info__list">
          <p className="customer-info__id">ID#</p>
          <p className="customer-info__date">Date Created</p>
          <p className="customer-info__file">File</p>
          <p className="customer-info__tech">Technician</p>
          <button className="customer-info__button">View</button>
        </div>
      </div>
    </>
  );
}

export default CustomerFiles;
