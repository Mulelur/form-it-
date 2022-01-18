import * as React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import lodash from 'lodash-es';
import deepdash from 'deepdash-es';
import ReactDOMServer from 'react-dom/server';
import { StoreProvider as Provider } from 'easy-peasy';

import store, { useGlobalState } from '../store';

import { Preview } from '../components';
import HeaderContainer from '../containers/layout/header';
import Html from '../components/html';
import inputField from '../components/fields/Elements/inputField';
import LineText from '../components/fields/Elements/Text';
import MyButton from '../components/fields/Elements/button';
// import { Page } from '../Interface/project.interface';

const Deep = deepdash(lodash);

type Params = {
  projectId: string;
  pageId: string;
};

export default function PreviewContainer() {
  const [page, setPage] = React.useState<any>();
  const [htmlDoc, setHtmlDoc] = React.useState();
  const { projectId, pageId } = useParams<Params>();
  const [toggleDrawer, setToggleDrawer] = React.useState<boolean>(true);

  // eslint-disable-next-line no-console
  console.log(toggleDrawer);

  const renderChild = (child: any) => {
    let htmlEle: any;
    switch (child.type) {
      case 'input':
        htmlEle = <inputField.Input style={child.styles} value={child.value} />;
        break;
      case 'text':
        htmlEle = (
          <LineText.Text style={child.styles}>{child.value}</LineText.Text>
        );
        break;
      case 'label':
        htmlEle = (
          <inputField.Label style={child.styles}>
            {child.value}
          </inputField.Label>
        );
        break;
      case 'button':
        htmlEle = (
          <MyButton onClick={() => {}} style={child.styles}>
            {child.value}
          </MyButton>
        );
        break;
      default:
        return <div>{child.value}</div>;
    }
    return htmlEle;
  };

  // eslint-disable-next-line consistent-return
  const renderNode = (child: any) => {
    // eslint-disable-next-line consistent-return
    if (!child.children) {
      return renderChild(child);
    }
    return (
      <div style={child.styles}>
        {child.children.map((item: any) => renderNode(item))}
      </div>
    );
  };

  const { projects } = useGlobalState((state) => state.Projects);

  React.useEffect(() => {
    const myPage = Deep.findDeep(projects, (item) => item === pageId);

    if (myPage) {
      setPage(myPage.parent);
    }
  }, []);

  // eslint-disable-next-line no-console
  console.log(page);

  const html = ReactDOMServer.renderToString(
    <>
      <Provider store={store}>
        <Html>
          <Html.Head>
            <meta charSet="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#000000" />
            <meta
              name="description"
              content="Web site created using create-react-app"
            />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

            {/* Google fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&family=Baloo+Tamma+2&family=Cabin+Sketch&family=Cedarville+Cursive&family=Dongle:wght@300&family=Dynalight&family=Fredoka+One&family=Gowun+Dodum&family=Harmattan&family=Just+Another+Hand&family=Just+Me+Again+Down+Here&family=Klee+One&family=League+Script&family=Licorice&family=Marck+Script&family=Marmelad&family=Merienda+One&family=Monoton&family=MonteCarlo&family=Montserrat:wght@300&family=Nanum+Pen+Script&family=Neucha&family=Shizuru&family=Vujahday+Script&family=Zeyada&display=swap"
              rel="stylesheet"
            />

            <title>Form IT</title>
          </Html.Head>
          <Html.Body>
            <div style={page?.styles}>
              {page &&
                page?.children?.map((item: any) => {
                  return (
                    <>
                      <div
                        // key={ite}
                        style={item?.styles}
                      >
                        {renderNode(item)}
                        <div />
                      </div>
                    </>
                  );
                })}
            </div>
          </Html.Body>
        </Html>
      </Provider>
    </>
  );

  // Make a request for a user with a given ID
  const sendContainer = React.useCallback(async () => {
    try {
      const res = await axios({
        method: 'post',
        url: `http://localhost:8080/preview/${projectId}`,
        data: {
          component: `${html}`
        }
      });
      setHtmlDoc(res.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }, []);

  React.useEffect(() => {
    sendContainer();
  }, []);

  return (
    <Preview>
      <HeaderContainer setToggleDrawer={setToggleDrawer} account />
      <iframe
        width="100%"
        style={{ height: `calc(100vh - 160px)` }}
        title="preview"
        allowFullScreen
        allowTransparency
        frameBorder="0"
        srcDoc={`<html lang="es">${htmlDoc}</html>`}
      />
    </Preview>
  );
}
