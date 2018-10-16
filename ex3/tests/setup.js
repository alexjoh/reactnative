import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { NativeModules } from "react-native";

global.fetch = require("jest-fetch-mock"); // eslint-disable-line no-undef
jest.mock("react-native-config");
Enzyme.configure({ adapter: new Adapter() });