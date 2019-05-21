import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GameInfo from './Game/GameInfoAsync';
import Game from './Game/GameAsync';
import Home from '../Home/HomeAsync';
import About from '../About/AboutAsync';
import getMessagePage from './MessagePage';
import ReactGA from 'react-ga';
import { getPageMetadata } from '../metadata';
import { registerLang, setCurrentLocale, Text } from 'react-easy-i18n';
import translations from './translations';

ReactGA.initialize('UA-105391878-1');

const withGA = (WrappedComponent: any) => {
  class Wrapper extends React.Component<{}, {}> {
    render() {
      if (typeof window !== 'undefined') {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
      }
      return <WrappedComponent {...this.props} />;
    }
  }
  return Wrapper;
};

const withI18n = (WrappedComponent: any) => {
  class Wrapper extends React.Component<any, {}> {
    render() {
      // load translations
      for (const langCode of getLangCodes()) {
        registerLang(langCode, translations[langCode]);
      }
      // set language based on URL, default to English
      const lang = this.props.match.params.locale || 'en';
      setCurrentLocale(lang);
      return <WrappedComponent {...this.props} />;
    }
  }
  return Wrapper;
};

const withWrappers = (WrappedComponent: any) => {
  return withI18n(withGA(WrappedComponent));
};

const getLangCodes = () => {
  return Object.keys(translations);
};

const generateBasePath = () => {
  const langCodes = getLangCodes();
  return `/:locale(${langCodes.join('|')})?`;
};

const base = generateBasePath();

class Main extends React.Component<{}, {}> {
  render() {
    if (typeof document !== 'undefined' &&
      typeof window !== 'undefined') {
      document.title = getPageMetadata(window.location.pathname).title;
    }
    return (
      <Switch>
        <Route exact={true} path={base} component={withWrappers(Home)} />
        <Route exact={true} path={`${base}/about`} component={withWrappers(About)} />
        <Route exact={true} path={`${base}/g/:gameCode`} component={withWrappers(GameInfo)} />
        <Route exact={true} path={`${base}/g/:gameCode/:mode`} component={withWrappers(Game)} />
        <Route exact={true} path={`${base}/g/:gameCode/:mode/:aiLevel`} component={withWrappers(Game)} />
        <Route exact={true} path={`${base}/g/:gameCode/:mode/:matchCode/:playerID`} component={withWrappers(Game)} />
        <Route exact={true} component={withWrappers(getMessagePage('error', 'messagePage.notFound'))} />
      </Switch>
    );
  }
}

export default Main;
