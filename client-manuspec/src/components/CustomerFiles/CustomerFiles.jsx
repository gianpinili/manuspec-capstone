import "./CustomerFiles.scss";
// import { Link } from "react-router-dom";
import Document from "../../assets/documents/service-inspection.pdf";

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
          <p className="customer-info__id">ID: 8</p>
          <p className="customer-info__date">1 day ago</p>
          <a className="customer-info__file" href={Document}>
            View
          </a>
          <p className="customer-info__tech">Ian Pinili</p>
        </div>
      </div>
      <div className="customer-info__files">
        <div className="customer-info__list">
          <p className="customer-info__id">ID: 7</p>
          <p className="customer-info__date">8 days ago</p>
          <a className="customer-info__file" href={Document}>
            View
          </a>
          <p className="customer-info__tech">Ian Pinili</p>
        </div>
      </div>
      <div className="customer-info__files">
        <div className="customer-info__list">
          <p className="customer-info__id">ID: 6</p>
          <p className="customer-info__date">7 weeks ago</p>
          <a className="customer-info__file" href={Document}>
            View
          </a>
          <p className="customer-info__tech">Ian Pinili</p>
        </div>
      </div>
      <div className="customer-info__files">
        <div className="customer-info__list">
          <p className="customer-info__id">ID: 5</p>
          <p className="customer-info__date">5 months ago</p>
          <a className="customer-info__file" href={Document}>
            View
          </a>
          <p className="customer-info__tech">Ian Pinili</p>
        </div>
      </div>
      <div className="customer-info__files">
        <div className="customer-info__list">
          <p className="customer-info__id">ID: 4</p>
          <p className="customer-info__date">7 months ago</p>
          <a className="customer-info__file" href={Document}>
            View
          </a>
          <p className="customer-info__tech">Ian Pinili</p>
        </div>
      </div>
      <div className="customer-info__files">
        <div className="customer-info__list">
          <p className="customer-info__id">ID: 3</p>
          <p className="customer-info__date">1 year ago</p>
          <a className="customer-info__file" href={Document}>
            View
          </a>
          <p className="customer-info__tech">Ian Pinili</p>
        </div>
      </div>
      <div className="customer-info__files">
        <div className="customer-info__list">
          <p className="customer-info__id">ID: 2</p>
          <p className="customer-info__date">2 years ago</p>
          <a className="customer-info__file" href={Document}>
            View
          </a>
          <p className="customer-info__tech">Ian Pinili</p>
        </div>
      </div>
      <div className="customer-info__files">
        <div className="customer-info__list">
          <p className="customer-info__id">ID: 1</p>
          <p className="customer-info__date">3 years ago</p>
          <a className="customer-info__file" href={Document}>
            View
          </a>
          <p className="customer-info__tech">Ian Pinili</p>
        </div>
      </div>
    </>
  );
}

export default CustomerFiles;
