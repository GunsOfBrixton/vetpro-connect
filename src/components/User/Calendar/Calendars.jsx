import React from 'react'
import style from "./Calendars.module.css";

function Calendars() {
  return (
    <div className={style.calendar}>
      <div className={style.month}>
  <ul>
    <li className={style.prev}>&#10094;</li>
    <li className={style.next}>&#10095;</li>
    <li>Junio</li>
  </ul>
</div>

<ul className={style.weekdays}>
  <li>Lu</li>
  <li>Ma</li>
  <li>Mi</li>
  <li>Ju</li>
  <li>Vi</li>
  <li>Sa</li>
  <li>Do</li>
</ul>

<ul className={style.days}>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li><span className={style.active}>10</span></li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
</ul>
    </div>
  )
}

export default Calendars
