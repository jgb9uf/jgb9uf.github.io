import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import Artists from './components/Artists';
import ArtistDetail from './components/ArtistDetail';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import ReleaseDetail from './components/ReleaseDetail';
import Releases from './components/Releases';
import Thoughts from './components/Thoughts';
import Zines from './components/Zines';
import ZineDetail from './components/ZineDetail';
import './NightErrands.css';
import RandomImage from './components/RandomImage';

import { MediaPlayer } from '@cassette/player';
import '@cassette/player/dist/css/cassette-player.css';

const history = createBrowserHistory();

class NightErrands extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'home',
      releaseDetail: 'NE04',
      releasePlaying: 'NE04',
      artistDetail: 'leofromvermont',
      zineDetail: 'Z01'
    }

    history.listen((location) => {
      if (location.pathname === '/releases') {
        this.setState({ page: 'releases' });
      } else if (location.pathname === '/about') {
        this.setState({ page: 'about' });
      } else if (location.pathname === '/thoughts') {
        this.setState({ page: 'thoughts' });
      } else if (location.pathname === '/artists') {
        this.setState({ page: 'artists' });
      } else if (location.pathname === '/artist') {
        this.setState({ page: 'artist' });
      } else if (location.pathname === '/home' || location.pathname === '/') {
        this.setState({ page: 'home' });
      } else if (location.pathname === '/zines') {
        this.setState({ page: 'zines' });
      } else if (location.pathname === '/fugues') {
        this.setState({ page: 'fugues' });
      }
    });

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleReleaseDetailChange = this.handleReleaseDetailChange.bind(this);
    this.handleArtistDetailChange = this.handleArtistDetailChange.bind(this);
    this.handleZineDetailChange = this.handleZineDetailChange.bind(this);
    this.handleReleasePlayingChange = this.handleReleasePlayingChange.bind(this);
  }

  handlePageChange(page) {
    this.setState({ page });
    history.push('/' + page);
  }

  handleReleaseDetailChange(releaseDetail) {
    this.setState({ releaseDetail });
    this.handlePageChange('');
  }

  handleReleasePlayingChange(releasePlaying) {
    this.setState({ releasePlaying });
  }

  handleArtistDetailChange(artistDetail) {
    this.setState({ artistDetail });
    this.handlePageChange('artist');
  }

  handleZineDetailChange(zineDetail) {
    this.setState({ zineDetail });
    this.handlePageChange('zine');
  }

  renderMediaPlayer() {
    const release = this.props.releases[this.state.releasePlaying]
    const playlist = [];
    release.audio && release.audio.forEach((audioFile, i) => playlist.push({url: audioFile, title: `${release.name} - ${i + 1}`}));
    
    return (
      <div className='ne-audio-player-wrapper'>
          <MediaPlayer playlist={playlist} controls={['backskip', 'playpause', 'forwardskip', 'progress']}/>
      </div>
    );
  }

  render() {
    let content;
    if (this.state.page === 'home') {
      content = <ReleaseDetail 
                  release={this.props.releases[this.state.releaseDetail]} 
                  onZineClick={this.handleZineDetailChange} 
                  onReleasePlayingChange={this.handleReleasePlayingChange}
                  zines={this.props.zines}
                />;
    } else if (this.state.page === 'releases') {
      content = <Releases releases={this.props.releases} onReleaseClick={this.handleReleaseDetailChange} />;
    } else if (this.state.page === 'thoughts') {
      content = <Thoughts thoughts={this.props.thoughts} />;
    } else if (this.state.page === 'about') {
      content = <About />;
    } else if (this.state.page === 'artists') {
      content = <Artists artists={this.props.artists} onArtistClick={this.handleArtistDetailChange} />;
    } else if (this.state.page === 'artist') {
      content = <ArtistDetail 
        artist={this.props.artists[this.state.artistDetail]} 
        onReleaseClick={this.handleReleaseDetailChange} 
        releases={this.props.releases} 
      />;
    } else if (this.state.page === 'zines') {
      content = <Zines zines={this.props.zines} onZineClick={this.handleZineDetailChange} />;
    } else if (this.state.page === 'zine') {
      content = <ZineDetail zine={this.props.zines[this.state.zineDetail]} />;
    } else if (this.state.page === 'fugues') {
      content = <RandomImage/>;
    }

    return (
      <React.Fragment>
        <div className='ne-content-wrapper'>
          <div className='ne-left-sidebar' />
          <div className='ne-content'>
            <Header onPageChange={this.handlePageChange} currentPage={this.state.page} />
            {content}
          </div>
          <div className='ne-right-sidebar' />
        </div>
        <Footer currentPage={this.state.page} />
        {this.renderMediaPlayer()}
      </React.Fragment>
    );
  }
}

export default NightErrands;