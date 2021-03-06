"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserSumAggregate = exports.UserMinAggregate = exports.UserMaxAggregate = exports.UserGroupBy = exports.UserCountAggregate = exports.UserCount = exports.UserAvgAggregate = exports.QuestionSumAggregate = exports.QuestionMinAggregate = exports.QuestionMaxAggregate = exports.QuestionGroupBy = exports.QuestionCountAggregate = exports.QuestionAvgAggregate = exports.ProfileSumAggregate = exports.ProfileMinAggregate = exports.ProfileMaxAggregate = exports.ProfileGroupBy = exports.ProfileCountAggregate = exports.ProfileAvgAggregate = exports.PostSumAggregate = exports.PostMinAggregate = exports.PostMaxAggregate = exports.PostGroupBy = exports.PostCountAggregate = exports.PostAvgAggregate = exports.AggregateUser = exports.AggregateQuestion = exports.AggregateProfile = exports.AggregatePost = exports.AffectedRowsOutput = void 0;

var AffectedRowsOutput_1 = require("./AffectedRowsOutput");

Object.defineProperty(exports, "AffectedRowsOutput", {
  enumerable: true,
  get: function () {
    return AffectedRowsOutput_1.AffectedRowsOutput;
  }
});

var AggregatePost_1 = require("./AggregatePost");

Object.defineProperty(exports, "AggregatePost", {
  enumerable: true,
  get: function () {
    return AggregatePost_1.AggregatePost;
  }
});

var AggregateProfile_1 = require("./AggregateProfile");

Object.defineProperty(exports, "AggregateProfile", {
  enumerable: true,
  get: function () {
    return AggregateProfile_1.AggregateProfile;
  }
});

var AggregateQuestion_1 = require("./AggregateQuestion");

Object.defineProperty(exports, "AggregateQuestion", {
  enumerable: true,
  get: function () {
    return AggregateQuestion_1.AggregateQuestion;
  }
});

var AggregateUser_1 = require("./AggregateUser");

Object.defineProperty(exports, "AggregateUser", {
  enumerable: true,
  get: function () {
    return AggregateUser_1.AggregateUser;
  }
});

var PostAvgAggregate_1 = require("./PostAvgAggregate");

Object.defineProperty(exports, "PostAvgAggregate", {
  enumerable: true,
  get: function () {
    return PostAvgAggregate_1.PostAvgAggregate;
  }
});

var PostCountAggregate_1 = require("./PostCountAggregate");

Object.defineProperty(exports, "PostCountAggregate", {
  enumerable: true,
  get: function () {
    return PostCountAggregate_1.PostCountAggregate;
  }
});

var PostGroupBy_1 = require("./PostGroupBy");

Object.defineProperty(exports, "PostGroupBy", {
  enumerable: true,
  get: function () {
    return PostGroupBy_1.PostGroupBy;
  }
});

var PostMaxAggregate_1 = require("./PostMaxAggregate");

Object.defineProperty(exports, "PostMaxAggregate", {
  enumerable: true,
  get: function () {
    return PostMaxAggregate_1.PostMaxAggregate;
  }
});

var PostMinAggregate_1 = require("./PostMinAggregate");

Object.defineProperty(exports, "PostMinAggregate", {
  enumerable: true,
  get: function () {
    return PostMinAggregate_1.PostMinAggregate;
  }
});

var PostSumAggregate_1 = require("./PostSumAggregate");

Object.defineProperty(exports, "PostSumAggregate", {
  enumerable: true,
  get: function () {
    return PostSumAggregate_1.PostSumAggregate;
  }
});

var ProfileAvgAggregate_1 = require("./ProfileAvgAggregate");

Object.defineProperty(exports, "ProfileAvgAggregate", {
  enumerable: true,
  get: function () {
    return ProfileAvgAggregate_1.ProfileAvgAggregate;
  }
});

var ProfileCountAggregate_1 = require("./ProfileCountAggregate");

Object.defineProperty(exports, "ProfileCountAggregate", {
  enumerable: true,
  get: function () {
    return ProfileCountAggregate_1.ProfileCountAggregate;
  }
});

var ProfileGroupBy_1 = require("./ProfileGroupBy");

Object.defineProperty(exports, "ProfileGroupBy", {
  enumerable: true,
  get: function () {
    return ProfileGroupBy_1.ProfileGroupBy;
  }
});

var ProfileMaxAggregate_1 = require("./ProfileMaxAggregate");

Object.defineProperty(exports, "ProfileMaxAggregate", {
  enumerable: true,
  get: function () {
    return ProfileMaxAggregate_1.ProfileMaxAggregate;
  }
});

var ProfileMinAggregate_1 = require("./ProfileMinAggregate");

Object.defineProperty(exports, "ProfileMinAggregate", {
  enumerable: true,
  get: function () {
    return ProfileMinAggregate_1.ProfileMinAggregate;
  }
});

var ProfileSumAggregate_1 = require("./ProfileSumAggregate");

Object.defineProperty(exports, "ProfileSumAggregate", {
  enumerable: true,
  get: function () {
    return ProfileSumAggregate_1.ProfileSumAggregate;
  }
});

var QuestionAvgAggregate_1 = require("./QuestionAvgAggregate");

Object.defineProperty(exports, "QuestionAvgAggregate", {
  enumerable: true,
  get: function () {
    return QuestionAvgAggregate_1.QuestionAvgAggregate;
  }
});

var QuestionCountAggregate_1 = require("./QuestionCountAggregate");

Object.defineProperty(exports, "QuestionCountAggregate", {
  enumerable: true,
  get: function () {
    return QuestionCountAggregate_1.QuestionCountAggregate;
  }
});

var QuestionGroupBy_1 = require("./QuestionGroupBy");

Object.defineProperty(exports, "QuestionGroupBy", {
  enumerable: true,
  get: function () {
    return QuestionGroupBy_1.QuestionGroupBy;
  }
});

var QuestionMaxAggregate_1 = require("./QuestionMaxAggregate");

Object.defineProperty(exports, "QuestionMaxAggregate", {
  enumerable: true,
  get: function () {
    return QuestionMaxAggregate_1.QuestionMaxAggregate;
  }
});

var QuestionMinAggregate_1 = require("./QuestionMinAggregate");

Object.defineProperty(exports, "QuestionMinAggregate", {
  enumerable: true,
  get: function () {
    return QuestionMinAggregate_1.QuestionMinAggregate;
  }
});

var QuestionSumAggregate_1 = require("./QuestionSumAggregate");

Object.defineProperty(exports, "QuestionSumAggregate", {
  enumerable: true,
  get: function () {
    return QuestionSumAggregate_1.QuestionSumAggregate;
  }
});

var UserAvgAggregate_1 = require("./UserAvgAggregate");

Object.defineProperty(exports, "UserAvgAggregate", {
  enumerable: true,
  get: function () {
    return UserAvgAggregate_1.UserAvgAggregate;
  }
});

var UserCount_1 = require("./UserCount");

Object.defineProperty(exports, "UserCount", {
  enumerable: true,
  get: function () {
    return UserCount_1.UserCount;
  }
});

var UserCountAggregate_1 = require("./UserCountAggregate");

Object.defineProperty(exports, "UserCountAggregate", {
  enumerable: true,
  get: function () {
    return UserCountAggregate_1.UserCountAggregate;
  }
});

var UserGroupBy_1 = require("./UserGroupBy");

Object.defineProperty(exports, "UserGroupBy", {
  enumerable: true,
  get: function () {
    return UserGroupBy_1.UserGroupBy;
  }
});

var UserMaxAggregate_1 = require("./UserMaxAggregate");

Object.defineProperty(exports, "UserMaxAggregate", {
  enumerable: true,
  get: function () {
    return UserMaxAggregate_1.UserMaxAggregate;
  }
});

var UserMinAggregate_1 = require("./UserMinAggregate");

Object.defineProperty(exports, "UserMinAggregate", {
  enumerable: true,
  get: function () {
    return UserMinAggregate_1.UserMinAggregate;
  }
});

var UserSumAggregate_1 = require("./UserSumAggregate");

Object.defineProperty(exports, "UserSumAggregate", {
  enumerable: true,
  get: function () {
    return UserSumAggregate_1.UserSumAggregate;
  }
});