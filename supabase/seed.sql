-- Sample published problems so the UI has something to show.
-- Run after schema.sql.

insert into public.problems (title, slug, description, difficulty, constraints, input_format, output_format, starter_code, examples, is_published)
values
(
  'Two Sum',
  'two-sum',
  'Given an array of integers and a target value, return the indices of the two numbers that add up to the target.',
  'easy',
  '2 <= n <= 10^4\n-10^9 <= nums[i] <= 10^9',
  'First line: n and target.\nSecond line: n space-separated integers.',
  'Two space-separated indices (0-indexed).',
  '{
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n\n    return 0;\n}",
    "python": "def main():\n    pass\n\nif __name__ == \"__main__\":\n    main()",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n\n    }\n}",
    "javascript": "function main() {\n\n}\n\nmain();"
  }'::jsonb,
  '[{"input": "4 9\n2 7 11 15", "output": "0 1", "explanation": "nums[0] + nums[1] = 9"}]'::jsonb,
  true
),
(
  'Reverse a Linked List',
  'reverse-linked-list',
  'Given the head of a singly linked list, reverse the list and return the new head.',
  'medium',
  '0 <= n <= 5000',
  'First line: n.\nSecond line: n space-separated integers representing the list.',
  'The reversed list, space-separated.',
  '{
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n\n    return 0;\n}",
    "python": "def main():\n    pass\n\nif __name__ == \"__main__\":\n    main()",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n\n    }\n}",
    "javascript": "function main() {\n\n}\n\nmain();"
  }'::jsonb,
  '[{"input": "3\n1 2 3", "output": "3 2 1"}]'::jsonb,
  true
),
(
  'N-Queens Count',
  'n-queens-count',
  'Given an integer n, return the number of distinct solutions to the n-queens puzzle.',
  'hard',
  '1 <= n <= 12',
  'A single integer n.',
  'A single integer: the number of solutions.',
  '{
    "cpp": "#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n\n    return 0;\n}",
    "python": "def main():\n    pass\n\nif __name__ == \"__main__\":\n    main()",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n\n    }\n}",
    "javascript": "function main() {\n\n}\n\nmain();"
  }'::jsonb,
  '[{"input": "4", "output": "2"}]'::jsonb,
  true
);

-- Hidden test cases for Two Sum
insert into public.test_cases (problem_id, input, expected_output, is_hidden)
select id, '4 9\n2 7 11 15', '0 1', false from public.problems where slug = 'two-sum'
union all
select id, '3 6\n3 2 4', '1 2', true from public.problems where slug = 'two-sum'
union all
select id, '2 6\n3 3', '0 1', true from public.problems where slug = 'two-sum';
