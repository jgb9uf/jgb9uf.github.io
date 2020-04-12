import React from 'react';

function Header(props) {
    function getHeaderListItemClasses(page) {
        if (page === props.currentPage) {
            return 'ne-header-list-item-selected ne-header-list-item';
        }
        return 'ne-header-list-item';
    }
    
    return (
        <div className="ne-header">
            <span>
                <h1 className="ne-header-title" onClick={() => props.onPageChange("")}>nighterrands</h1>
            </span>
            <div>
                <img 
                    onClick={() => props.onPageChange("")}
                    className="ne-logo" 
                    src={"https://nighterrands.s3.amazonaws.com/images/logo-small.png"} 
                    alt="Night Errands" 
                />
            </div>
            <ul className="ne-header-list">
                <li>
                    <span className={getHeaderListItemClasses("releases")} onClick={() => props.onPageChange("releases")}>releases</span>
                </li>
                <li>
                    <span className={getHeaderListItemClasses("artists")} onClick={() => props.onPageChange("artists")}>artists</span>
                </li>
                <li>
                    <span className={getHeaderListItemClasses("zines")} onClick={() => props.onPageChange("zines")}>zines</span>
                </li>
                <li>
                    <span className={getHeaderListItemClasses("fugues")} onClick={() => props.onPageChange("fugues")}>fugues</span>
                </li>
                <li>
                    <span className={getHeaderListItemClasses("thoughts")} onClick={() => props.onPageChange("thoughts")}>thoughts</span>
                </li>
                <li>
                    <span className={getHeaderListItemClasses("about")} onClick={() => props.onPageChange("about")}>about</span>
                </li>
            </ul>
        </div>
    )
  }

export default Header;