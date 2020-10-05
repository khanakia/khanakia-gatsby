import React from "react"
export default () => {
  var d = new Date();
  var year = d.getFullYear();

  return (
    <div className="container footer">
      <div className="row">
        <div className="col-md-6">
          © {year} Khanakia Inc. All rights reserved.
        </div>
      </div>
    </div>
  )
}