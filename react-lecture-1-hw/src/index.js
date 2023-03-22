import React from "react";
import ReactDOM from "react-dom";
import data from "./data";
import './styles.css';

function App () {
    return (
        <div>
            <h1>Курс Валют станом на {data[0].exchangedate}.</h1>
            <table>
                <thead>
                        <th>Назва валюти</th>
                        <th>Код валюти</th>
                        <th>Вартість валюти</th>
                </thead>
                <tbody>
                {data.map(function(elem){
                    return (
                    <tr>
                        <td>{elem.txt}</td>
                        <td>{elem.cc}</td>
                        <td>{elem.rate}</td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('div'))
