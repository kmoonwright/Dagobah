-- GENERAL GUIDE
-- Order of Operations
  -- 1. FROM
  -- 2. JOIN
  -- 3. WHERE
  -- 4. GROUP BY
  -- 5. HAVING
  -- 6. SELECT
  -- 7. ORDER BY
  -- 8. LIMIT/OFFSET


SELECT DISTINCT column
FROM myTable
JOIN anotherTable ON myTable.column = anotherTable.COLUMN
WHERE constrantExpression
GROUP BY column
HAVING constraintExpression
ORDER BY column ASC/DESC
LIMIT count 
OFFSET count


-- EXAMPLE:
SELECT column1, column2...
FROM table1
WHERE column4 = 1 AND column5 = 5
GROUP BY something
HAVING count(*) > 1
ORDER BY ASC or DESC

-- Type of JOINS
    --NOTE: JOIN defaults to INNER JOIN
-- INNER JOIN
  SELECT * FROM TableA
  INNER JOIN TableB
  ON TableA.name = TableB.name

-- FULL OUTER Join
  SELECT *
  FROM TableA
  FULL OUTER JOIN TableB
  ON TableA.name = TableB.name

-- Unique Records
  SELECT *
  FROM TableA
  WHERE TableA.id IS null
  OR TableB.id IS null

-- Left OUTER JOIN
  SELECT * FROM TableA
  LEFT OUTER JOIN TableB
  ON TableA.name = TableB.name

-- Left w/ exclusion
  SELECT *
  FROM TableA
  WHERE TableB IS null