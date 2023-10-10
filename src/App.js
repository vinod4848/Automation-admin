import React from "react";
import { connect } from "react-redux";
import { Route, Switch ,withRouter} from "react-router-dom";
import Login from "./screens/Login";
import dashboard from "./screens/Dashbord/Dashbord";
import demographic from "./screens/Dashbord/Demographic";
import ioT from "./screens/Dashbord/IoT";
import NavbarMenu from "./components/NavbarMenu";
import appInbox from "./screens/App/Inbox";
import appChat from "./screens/App/Chat";
import appCalendar from "./screens/App/Calendar";
import appContact from "./screens/App/Contact";
import appTaskbar from "./screens/App/Taskbar";
import filemanagerdashboard from "./screens/FileManager/Dashboard";
import filedocuments from "./screens/FileManager/Documents";
import filemedia from "./screens/FileManager/Media";
import fileimages from "./screens/FileManager/Images";
import blognewPost from "./screens/Blog/NewPost";
import blogdetails from "./screens/Blog/BlogDetails";
import bloglist from "./screens/Blog/BlogList";
import uitypography from "./screens/UIElements/Typography";
import uitabs from "./screens/UIElements/Tabs";
import uibuttons from "./screens/UIElements/Button";
import bootstrapui from "./screens/UIElements/BootstrapUI";
import uiicons from "./screens/UIElements/Icons";
import uinotifications from "./screens/UIElements/Notifications";
import uicolors from "./screens/UIElements/Colors";
import uilistgroup from "./screens/UIElements/ListGroup";
import uimediaobject from "./screens/UIElements/MediaObject";
import uimodal from "./screens/UIElements/Modals";
import uiprogressbar from "./screens/UIElements/ProgressBar";
import widgetsdata from "./screens/Widgets/Data";
import widgetsweather from "./screens/Widgets/Weather";
import widgetsblog from "./screens/Widgets/Blog";
import widgetsecommers from "./screens/Widgets/ECommers";
import registration from "./screens/Auth/Registration";
import lockscreen from "./screens/Auth/Lockscreen";
import forgotpassword from "./screens/Auth/ForgotPassword";
import page404 from "./screens/Auth/Page404";
import page403 from "./screens/Auth/Page403";
import page500 from "./screens/Auth/Page500";
import page503 from "./screens/Auth/Page503";
import blankpage from "./screens/Pages/BlankPage";
import profilev1page from "./screens/Pages/ProfileV1";
import profilev2page from "./screens/Pages/ProfileV2";
import imagegalleryprofile from "./screens/Pages/ImageGallery";
import timeline from "./screens/Pages/TimeLine";
import pricing from "./screens/Pages/Pricing";
import invoices from "./screens/Pages/Invoices";
import invoicesv2 from "./screens/Pages/InvoicesV2";
import searchresult from "./screens/Pages/SearchResults";
import helperclass from "./screens/Pages/HelperClass";
import teamsboard from "./screens/Pages/TeamsBoard";
import projectslist from "./screens/Pages/ProjectsList";
import maintanance from "./screens/Pages/Maintanance";
import testimonials from "./screens/Pages/Testimonials";
import faqs from "./screens/Pages/Faqs";
import formvalidation from "./screens/Forms/FormValidation";
import basicelements from "./screens/Forms/BasicElements";
import tablenormal from "./screens/Tables/TableNormal";
import echart from "./screens/Charts/Echart";
import leafletmap from "./screens/Maps/GoogleMaps";
import NewDirectory from "./screens/Directory/NewDirectory";
import DirectoryDetails from "./screens/Directory/DirectoryDetails";
import NewEvents from "./screens/Events/NewEvents";
import EventsDetails from "./screens/Events/EventsDetails";
import DirectoryList from "./screens/Directory/DirectoryList";
import EventsList from "./screens/Events/EventsList";
import UpdateBlogPost from "./components/Blog/UpdateBlogPost";
import UpdatePost from "./screens/Blog/UpdatePost";
import NewAds from "./screens/Ads/NewAds";
import NewHeaderAds from "./screens/Header Ads/NewHeaderAds";
import AdsDetailsPage from "./screens/Ads/AdsDetailsPage";
import AdsList from "./screens/Ads/AdsList";
import HeaderAdsList from "./screens/Header Ads/HeaderAdsList";
import NewBannerAds from "./screens/Banner/NewBannerAds";
import BannerAdsList from "./screens/Banner/BannerAdsList";

window.__DEV__ = true;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoad: true,
    };
  }
  render() {

    var res = window.location.pathname;
    var baseUrl = process.env.PUBLIC_URL;
    baseUrl = baseUrl.split("/");
    res = res.split("/");
    res = res.length > 0 ? res[baseUrl.length] : "/";
    res = res ? res : "/";
    const activeKey1 = res;

    return (
      <div id="wrapper">
        {activeKey1 === "" ||
        activeKey1 === "/" ||
        activeKey1 === "login" ||
        activeKey1 === "registration" ||
        activeKey1 === "lockscreen" ||
        activeKey1 === "forgotpassword" ||
        activeKey1 === "page404" ||
        activeKey1 === "page403" ||
        activeKey1 === "page500" ||
        activeKey1 === "page503" ||
        activeKey1 === "maintanance" ? (
            <Switch>
              {/* <Route exact path={`${process.env.PUBLIC_URL}`} component={Login} /> */}
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/`}
                component={Login}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/login`}
                component={Login}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/forgotpassword`}
                component={forgotpassword}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/page404`}
                component={page404}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/page403`}
                component={page403}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/page500`}
                component={page500}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/page503`}
                component={page503}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/registration`}
                component={registration}
              />
              <Route exact path={`registration`} component={registration} />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/lockscreen`}
                component={lockscreen}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/maintanance`}
                component={maintanance}
              />
            </Switch>
        ) : (
          <>
              <NavbarMenu history={this.props.history} activeKey={activeKey1} />
              <div id="main-content">
                <Switch>
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/dashboard`}
                    component={dashboard}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/demographic`}
                    component={demographic}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/ioT`}
                    component={ioT}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/appinbox`}
                    component={appInbox}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/appchat`}
                    component={appChat}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/appcalendar`}
                    component={appCalendar}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/appcontact`}
                    component={appContact}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/apptaskbar`}
                    component={appTaskbar}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/filemanagerdashboard`}
                    component={filemanagerdashboard}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/filedocuments`}
                    component={filedocuments}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/filemedia`}
                    component={filemedia}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/fileimages`}
                    component={fileimages}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/blognewpost`}
                    component={blognewPost}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/blogupdatepost/:postId`}
                    component={UpdatePost}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/newdirectory`}
                    component={NewDirectory}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/directory/:directoryId`}
                    component={DirectoryDetails}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/ads/:adsId`}
                    component={AdsDetailsPage}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/newevents`}
                    component={NewEvents}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/newads`}
                    component={NewAds}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/newheaderads`}
                    component={NewHeaderAds}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/newbannerads`}
                    component={NewBannerAds}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/events/:eventId`}
                    component={EventsDetails}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/blogdetails/:postId`}
                    component={blogdetails}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/bloglist`}
                    component={bloglist}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/adslist`}
                    component={AdsList}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/headeradslist`}
                    component={HeaderAdsList}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/banneradslist`}
                    component={BannerAdsList}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/directoryList`}
                    component={DirectoryList}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/eventsList`}
                    component={EventsList}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/uitypography`}
                    component={uitypography}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/uitabs`}
                    component={uitabs}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/bootstrapui`}
                    component={bootstrapui}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/uiicons`}
                    component={uiicons}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/uinotifications`}
                    component={uinotifications}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/uicolors`}
                    component={uicolors}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/uilistgroup`}
                    component={uilistgroup}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/uimediaobject`}
                    component={uimediaobject}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/uimodal`}
                    component={uimodal}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/uibuttons`}
                    component={uibuttons}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/uiprogressbar`}
                    component={uiprogressbar}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/widgetsdata`}
                    component={widgetsdata}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/widgetsweather`}
                    component={widgetsweather}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/widgetsblog`}
                    component={widgetsblog}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/widgetsecommers`}
                    component={widgetsecommers}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/blankpage`}
                    component={blankpage}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/profilev1page`}
                    component={profilev1page}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/profilev2page`}
                    component={profilev2page}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/imagegalleryprofile`}
                    component={imagegalleryprofile}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/timeline`}
                    component={timeline}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/pricing`}
                    component={pricing}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/invoices`}
                    component={invoices}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/invoicesv2`}
                    component={invoicesv2}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/searchresult`}
                    component={searchresult}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/helperclass`}
                    component={helperclass}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/teamsboard`}
                    component={teamsboard}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/projectslist`}
                    component={projectslist}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/testimonials`}
                    component={testimonials}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/faqs`}
                    component={faqs}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/formvalidation`}
                    component={formvalidation}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/basicelements`}
                    component={basicelements}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/tablenormal`}
                    component={tablenormal}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/echart`}
                    component={echart}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/leafletmap`}
                    component={leafletmap}
                  />
                </Switch>
              </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => ({
  isLoggedin: loginReducer.isLoggedin,
});

export default withRouter(connect(mapStateToProps, {})(App));
