use soccer;


select * from `epl_results_2022-23`
where AST > HST and FTR = 'A';


select FTR, COUNT(*)
where AST > HST 
from `epl_results_2022-23`;

select count(*)
from `epl_results_2022-23`
where AST > HST and FTR = 'A';


SELECT MAX(Referee)
FROM `epl_results_2022-23`;
select Date, Count(*)
from `epl_results_2022-23`
where HST > AST;

SELECT HR, column2, ...
FROM table1
WHERE condition IN (SELECT columnX FROM tableY WHERE condition);



