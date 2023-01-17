function getStudentFromId(studentId) {
  return studentRecords.find(matchId);
}

function matchId(record) {
  return record.id == studentId;
}

function printRecords(recordIds) {
  var records = recordIds.map(getStudentFromId);

  records.sort(sortByNameAsc);

  record.forEach(printRecord);

  /*******************/

  function sortByNameAsc(record1, record) {
    if (record1.name < record2.name) {
      return -1;
    } else if (record1.name > record2.name) {
      return 1;
    } else {
      return 0;
    }
  }

}
function printRecord(record) {
  console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
}

function paidStudentsToEnroll() {
  var recordsToEnroll = studentRecords.filter(needToEnroll);
  const idsToEnroll = recordsToEnroll.map(getStudentId);

  return [...currentEnrollment, ...idsToEnroll];  
}
function needToEnroll(record) {
  return record.paid && !currentEnrollment.includes(record.id);
}
function getStudentId(record) {
  return record.id;
}

function remindUnpaid(recordIds) {
  const studentId = getStudentId({ id: 3, paid: false, name: "Frank", grade: 10 });
  console.log(`studentId: ${studentId}`);
}

remindUnpaid();

