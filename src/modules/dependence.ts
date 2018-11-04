import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";

import { RouterService } from "src/services";

const container = new Container();
container.bind(RouterService).toSelf();

const { lazyInject } = getDecorators(container);

export { lazyInject };
