import renderStandart from './standart';
import renderPlain from './plain';

const formats = {
  standart: renderStandart,
  plain: renderPlain,
};

export default (ast, format) => formats[format](ast);
