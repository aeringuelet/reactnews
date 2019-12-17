import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';

class App extends Component {
  state = { 
    news: []
   }

  async componentDidMount() {
    this.getNews();
  }

  getNews = async () => {
    const country = "us";
    const category = "technology";
    const apiKey = "0108dd2c942b4b14959feac20103f85b";

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

    const response = await fetch(url);
    const news = await response.json();

    this.setState({
      news: news.articles
    })
  }

  render() { 
    return ( 
    <Fragment>
      <Header 
        title="News Feed"
      />

      <div className="container white news-container">
        <NewsList 
          news={this.state.news}
        />
      </div>
    </Fragment> 
    );
  }
}
 
export default App;