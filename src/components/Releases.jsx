import React from 'react';
import ReleaseBrief from './ReleaseBrief';

function Releases(props) {
    function renderSection(section) {
        const releaseIds = Object.keys(props.releases).reverse().filter(id => props.releases[id].section === section);
        const releases = releaseIds.map(id => {
            return (
                <ReleaseBrief key={id} release={props.releases[id]} onReleaseClick={props.onReleaseClick}/>
            );
        });
        return (
            <div key={section} className="ne-release-section">
                <div className="ne-release-section-title">
                    {section}
                </div>
                {releases}
            </div>    
        );
    }
    
    function renderReleases() {
        const sections = Object.values(props.releases).map(release => release.section);
        const distinctSections = [...new Set(sections)].sort();
        return distinctSections.map(section => renderSection(section));
    }
    
    return (
        <div className="ne-releases">
            {renderReleases()}
        </div>
    )
  }

export default Releases;