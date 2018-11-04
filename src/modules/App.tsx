import * as React from "react";
import { Router } from "react-router";

import backImageURL from "src/assets/images/background.jpg";
import { RouterService } from "src/services";
import * as cls from "./App.module.less";
import { lazyInject } from "./dependence";
import Topbar from "./global/Topbar";
import Workspace from "./workspace/Workspace";

class App extends React.Component {
  @lazyInject(RouterService)
  public router: RouterService;

  public render() {
    return (
      <Router history={this.router.history}>
        <div
          className={cls.container}
          style={{ background: `url(${backImageURL})` }}
        >
          <div className={cls.topbar}>
            <Topbar />
          </div>
          <div className={cls.workspace}>
            <Workspace />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
