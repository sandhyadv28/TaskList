// https://run.mocky.io/v3/d4c6094f-c3d5-456e-910b-525174551b0f
type Task = {
    id: number;
    Task: string;
    'Task Type': string;
    'Patient name': string;
    'Bed no': string;
    Severity?: string;  // Optional field, as not all entries have Severity
    'Hospital-unit': string;
    Date: string;
    Assignee: string;
    Creator: string;
    Verified: string;
  };
  
  export const TableData: Task[] = [
    {
        id: 1,
        Task: 'Monitor the GCS  and SOS intuabtion',
        'Task Type': 'Follow Up',
        'Patient name': 'John Doe',
        'Bed no': '101',
        Severity: 'Unstable',
        'Hospital-unit': 'ICU',
        Date: '2024-08-20',
        Assignee: 'Nurse David',
        Creator: 'Dr. Smith',
        Verified: 'Done'
    },
    {
        id: 2,
        Task: 'Very close monitoing of HR, BP and U/O. Update me hrly. ABG, Chest X ray stat.',
        'Task Type': 'Admission',
        'Patient name': 'Jane Smith',
        'Bed no': '102',
        'Hospital-unit': 'Ward',
        Date: '2024-08-19',
        Assignee: 'Nurse David',
        Creator: 'Dr. Johnson',
        Verified: 'Done'
    },
    {
        id: 3,
        Task: 'Follow abg cxr',
        'Task Type': 'Round',
        'Patient name': 'Alice Brown',
        'Bed no': '103',
        'Hospital-unit': 'Surgery',
        Date: '2024-08-21',
        Assignee: 'Nurse David',
        Creator: 'Dr. Lee',
        Verified: 'Not Done'
    },
    {
        id: 4,
        Task: 'Tachycardia noted by bedside team patient having fever 101f inj-pcm 1gm and tepidsponge ',
        'Task Type': 'Others',
        'Patient name': 'Michael Green',
        'Bed no': '104',
        'Hospital-unit': 'Recovery',
        Date: '2024-08-22',
        Assignee: 'Nurse David',
        Creator: 'Dr. Davis',
        Verified: 'Not Done'
    },
    {
        id: 5,
        Task: 'Check for patient’s response to new medication.',
        'Task Type': 'Follow Up',
        'Patient name': 'Robert White',
        'Bed no': '105',
        'Hospital-unit': 'Ward',
        Date: '2024-08-23',
        Assignee: 'Nurse Emma',
        Creator: 'Dr. Brown',
        Verified: 'Done'
    },
    {
        id: 6,
        Task: 'Monitor oxygen levels closely and notify if below 90%.',
        'Task Type': 'Admission',
        'Patient name': 'Lisa Black',
        'Bed no': '106',
        'Hospital-unit': 'ICU',
        Date: '2024-08-23',
        Assignee: 'Nurse Frank',
        Creator: 'Dr. Harris',
        Verified: 'Not Done'
    },
    {
        id: 7,
        Task: 'Prepare patient for surgery, ensure all pre-op checks are completed.',
        'Task Type': 'Admission',
        'Patient name': 'James Wilson',
        'Bed no': '107',
        Severity: 'Unstable',
        'Hospital-unit': 'Surgery',
        Date: '2024-08-22',
        Assignee: 'Nurse Grace',
        Creator: 'Dr. Adams',
        Verified: 'Not Done'
    },
    {
        id: 8,
        Task: 'Evaluate pain levels post-surgery, administer pain relief if necessary.',
        'Task Type': 'Round',
        'Patient name': 'Sophia Davis',
        'Bed no': '108',
        Severity: 'Unstable',
        'Hospital-unit': 'Recovery',
        Date: '2024-08-23',
        Assignee: 'Nurse Grace',
        Creator: 'Dr. Thompson',
        Verified: 'Done'
    },
    {
        id: 9,
        Task: 'Administer IV antibiotics as prescribed.',
        'Task Type': 'Others',
        'Patient name': 'Henry Clark',
        'Bed no': '109',
        Severity: 'Unstable',
        'Hospital-unit': 'ICU',
        Date: '2024-08-24',
        Assignee: 'Nurse Jake',
        Creator: 'Dr. Miller',
        Verified: 'Not Done'
    },
    {
        id: 10,
        Task: 'Update patient chart with latest lab results.',
        'Task Type': 'Others',
        'Patient name': 'Emily Wright',
        'Bed no': '110',
        'Hospital-unit': 'Ward',
        Date: '2024-08-24',
        Assignee: 'Nurse Megan',
        Creator: 'Dr. Wilson',
        Verified: 'Done'
    },
    {
        id: 11,
        Task: 'Ensure proper ventilation support is provided.',
        'Task Type': 'Follow Up',
        'Patient name': 'Olivia King',
        'Bed no': '111',
        Severity: 'Unstable',
        'Hospital-unit': 'ICU',
        Date: '2024-08-24',
        Assignee: 'Nurse Lucas',
        Creator: 'Dr. Carter',
        Verified: 'Not Done'
    },
    {
        id: 12,
        Task: 'Administer IV fluids and monitor response.',
        'Task Type': 'Follow Up',
        'Patient name': 'Alexander Hill',
        'Bed no': '112',
        'Hospital-unit': 'Ward',
        Date: '2024-08-23',
        Assignee: 'Nurse Lily',
        Creator: 'Dr. Edwards',
        Verified: 'Done'
    },
    {
        id: 13,
        Task: 'Conduct neurological assessment and document findings.',
        'Task Type': 'Follow Up',
        'Patient name': 'Charlotte Adams',
        'Bed no': '113',
        Severity: 'Unstable',
        'Hospital-unit': 'ICU',
        Date: '2024-08-24',
        Assignee: 'Nurse Ryan',
        Creator: 'Dr. Scott',
        Verified: 'Not Done'
    },
    {
        id: 14,
        Task: 'Prepare patient for MRI scan.',
        'Task Type': 'Round',
        'Patient name': 'Lucas Turner',
        'Bed no': '114',
        'Hospital-unit': 'Radiology',
        Date: '2024-08-23',
        Assignee: 'Nurse Chloe',
        Creator: 'Dr. White',
        Verified: 'Not Done'
    },
    {
        id: 15,
        Task: 'Monitor blood glucose levels hourly.',
        'Task Type': 'Round',
        'Patient name': 'Isabella Harris',
        'Bed no': '115',
        Severity: 'Unstable',
        'Hospital-unit': 'ICU',
        Date: '2024-08-23',
        Assignee: 'Nurse Ethan',
        Creator: 'Dr. Green',
        Verified: 'Done'
    },
    {
        id: 16,
        Task: 'Assist in wound dressing change.',
        'Task Type': 'Admission',
        'Patient name': 'Sophia Lewis',
        'Bed no': '116',
        'Hospital-unit': 'Surgery',
        Date: '2024-08-22',
        Assignee: 'Nurse Liam',
        Creator: 'Dr. Roberts',
        Verified: 'Done'
    },
    {
        id: 17,
        Task: 'Check vital signs every 15 minutes.',
        'Task Type': 'Follow Up',
        'Patient name': 'Ethan Walker',
        'Bed no': '117',
        Severity: 'Unstable',
        'Hospital-unit': 'ICU',
        Date: '2024-08-24',
        Assignee: 'Nurse Liam',
        Creator: 'Dr. Baker',
        Verified: 'Not Done'
    },
    {
        id: 18,
        Task: 'Update care plan based on latest clinical findings.',
        'Task Type': 'Round',
        'Patient name': 'Mia Thompson',
        'Bed no': '118',
        'Hospital-unit': 'Ward',
        Date: '2024-08-24',
        Assignee: 'Nurse Liam',
        Creator: 'Dr. Morgan',
        Verified: 'Done'
    },
    {
        id: 19,
        Task: 'Update care plan based on latest clinical findings.',
        'Task Type': 'Round',
        'Patient name': 'Mia Thompson',
        'Bed no': '118',
        'Hospital-unit': 'Ward',
        Date: '2024-08-24',
        Assignee: 'Nurse Liam',
        Creator: 'Dr. Morgan',
        Verified: 'Done'
    },
    {
        id: 20,
        Task: 'Update care plan based on latest clinical findings.',
        'Task Type': 'Round',
        'Patient name': 'Mia Thompson',
        'Bed no': '118',
        'Hospital-unit': 'Ward',
        Date: '2024-08-24',
        Assignee: 'Nurse Liam',
        Creator: 'Dr. Morgan',
        Verified: 'Done'
    },
];
