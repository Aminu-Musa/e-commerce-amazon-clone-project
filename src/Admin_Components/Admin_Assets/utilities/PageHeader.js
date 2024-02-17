import { useState } from "react";

function PageHeader(props) {
  let [navbar, setNavbar] = useState(true);

  const { title } = props;

  return (
    <div className="page-title">
      <h1>{title}</h1>
    </div>
  );
}

export default PageHeader;
