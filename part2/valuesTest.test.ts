import { expect } from 'chai';
import { listPrim } from "./evalPrimitive";
import { makeOk, isOk, Result, bind } from "../shared/result";
import { parseL5, Program, unparseLetValuesExp, isLetValuesExp, parseL5CExp, parseL5Exp } from './L5-ast';
import { parse } from '../shared/parser';
import { Sexp } from 's-expression';
import { isArray } from '../shared/type-predicates';
import { applicativeEval } from './L5-eval';
import { theGlobalEnv } from './L5-env';
import { L5typeof } from './L5-typecheck';

// describe('L4 Normal Eval', () => {
//     it('evaluates atoms', () => {
//         const s=parse("(let-values (((a b c) (f 0)))(+ a b c))");
//         if(isOk(s))
//             if(isArray(s))
//         expect(s[0]).to.;
//     });
// }); 

const pretty = (obj: any): void => console.log(JSON.parse(JSON.stringify(obj, undefined, 2)));
const s=bind(parse("(let-values (((a b c) (values 5 5 5)) ((x y z) (values 5 5 5))) (+ a b c x y z))"),parseL5Exp);
// //const x=parseL5CExp("(if #t 5 4)");
// if(isOk(s) && isLetValuesExp(s.value)){
//         console.log("in IF");
//         pretty(applicativeEval(s.value,theGlobalEnv));
//         // const a2=unparseLetValuesExp(s.value);
//         // if(isOk(a2))
//         //     pretty(a2.value);
// }
pretty(L5typeof("(let ((z 5)) (+ z 5))"));
