-- 1.1 departments.id без связанных названий в dep_names
SELECT d.id
FROM departments d
LEFT JOIN dep_names n ON n.department_id = d.id
WHERE n.id IS NULL;

-- Альтернатива через NOT EXISTS
-- SELECT d.id
-- FROM departments d
-- WHERE NOT EXISTS (
--   SELECT 1 FROM dep_names n WHERE n.department_id = d.id
-- );

-- 1.2 departments.id, у которых 2 и более названий
SELECT d.id
FROM departments d
JOIN dep_names n ON n.department_id = d.id
GROUP BY d.id
HAVING COUNT(*) >= 2;

-- 1.3 departments.* + одно название с минимальным dep_names.id (PostgreSQL: LATERAL)
SELECT d.*, n.name
FROM departments d
LEFT JOIN LATERAL (
  SELECT name
  FROM dep_names
  WHERE department_id = d.id
  ORDER BY id
  LIMIT 1
) n ON TRUE;


