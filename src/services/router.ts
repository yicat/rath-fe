import { createBrowserHistory } from "history";
import { injectable } from "inversify";

@injectable()
export class RouterService {
  public history = createBrowserHistory();
}
