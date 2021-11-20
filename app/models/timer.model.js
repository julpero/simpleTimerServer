module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
          owner: String,
          title: String,
          status: ['created', 'running', 'paused', 'finsihed'],
        },
        { timestamps: true }
    );

    schema.method("toJson", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Timer = mongoose.model("timer", schema);
  
    return Timer;
  };